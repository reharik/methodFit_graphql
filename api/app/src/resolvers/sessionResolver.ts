import {
	QueryResolvers,
	MutationResolvers,
	Session,
} from '../generated/gen-types';
import { SQL, ContextType } from '../contextProvider';
type Resolvers = {
	Query: QueryResolvers;
	Mutation: MutationResolvers;
};

const createInarrears = async (
	sql: SQL,
	sessions: string[],
	createDate: string
) => {
	const usedPaymentSessions = await sql.query<Session>`select EntityId,
	AppointmentType,
	TrainerId,
	ClientId,
	SessionUsed
	from session 
	where SessionUsed=1 AND entityId in (${sessions.join(',')})`;
	const usedSessions: Session[] = usedPaymentSessions.recordset;

	for (let i = 0; i < usedSessions.length; i++) {
		await sql.query`update session set
		CreatedDate =${createDate},
		ChangedDate=GETDATE(),
		CreatedById = 1,
		ChangedById = 1,
		IsDeleted = 0,
		CompanyId = 1,
		cost = 0,
		AppointmentType = ${usedSessions[i].AppointmentType},
		SessionUsed = 1,
		trainerPaid = 0,
		trainerCheckNumber = 0 ,
		inarrears = 1,
		ClientId =${usedSessions[i].ClientId},
		TrainerId = ${usedSessions[i].TrainerId},
		TrainerVerified = 0
		where entityId = ${usedSessions[i].EntityId}
		`;
	}
	return usedSessions.map((x) => x.EntityId);
};

export const resolvers: Resolvers = {
	Query: {
		purchases: async (root, args, context: ContextType) => {
			const { clientId, paymentId } = args;
			const { sql } = context;
			try {
				const paymentResult =
					await sql.query`select CreatedDate from Payment where EntityId = ${paymentId}`;
				const createdDate = paymentResult.recordset[0];
				if (!createdDate) {
					return [];
				}
				const result = await sql.query`select EntityId,
					CreatedDate,
					Cost,
					AppointmentType,
					SessionUsed,
					TrainerPaid,
					InArrears,
					ClientId from session where clientId = ${clientId}
					AND CreatedDate = ${createdDate}`;
				const sessions: Session[] = result.recordset;
				return sessions;
			} catch (error) {
				console.log('error logging in:', error);
				throw new Error(error.toString());
			}
		},
	},
	Mutation: {
		deleteSessions: async (root, args, context: ContextType) => {
			const {
				input: { sessions, clientId, paymentId },
			} = args;
			const { sql } = context;

			try {
				// get createdDate and count from Payment record
				const paymentResult =
					await sql.query`select count(CreatedDate) as count, CreatedDate 
				FROM session GROUP BY clientId, CreatedDate
				HAVING  clientId = ${clientId}
				and CreatedDate = (select createddate from payment where entityId = ${paymentId})`;
				const { createdDate, count } = paymentResult.recordset[0];

				// update any used sessions to be in arrears
				const usedSessions = await createInarrears(
					sql,
					sessions,
					createdDate
				);

				// delete the rest of the sessions
				const sessionsToDelete = sessions.filter((x) =>
					usedSessions.includes(x)
				);
				await sql.query`delete from session where entityId in (${sessionsToDelete})`;

				// if all the sessions are deleted, delete the payment record too
				// else get the remaining ones and return;
				let remainingSessions: Session[] = [];
				if (sessions.length === count) {
					await sql.query`delete from payment where entityId = ${paymentId}`;
				} else {
					const result = await sql.query`select EntityId,
					CreatedDate,
					Cost,
					AppointmentType,
					SessionUsed,
					TrainerPaid,
					InArrears,
					ClientId from session where clientId = ${clientId} AND CreatedDate=${createdDate}`;
					remainingSessions = result.recordset;
				}
				return { success: true, sessions: remainingSessions };
			} catch (error) {
				console.log('error logging in:', error);
				throw new Error(error.toString());
			}
		},
	},
};

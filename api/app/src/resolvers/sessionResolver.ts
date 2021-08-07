import {
	QueryResolvers,
	MutationResolvers,
	Session,
} from '../generated/gen-types';

type Resolvers = {
	Query: QueryResolvers;
	Mutation: MutationResolvers;
};

export const resolvers: Resolvers = {
	Query: {
		sessions: async (root, args, context) => {
			const { clientId } = args;
			const { sql } = context;
			try {
				const result = await sql.query`select EntityId,
					CreatedDate,
					Cost,
					AppointmentType,
					SessionUsed,
					TrainerPaid,
					InArrears,
					ClientId from session where clientId = ${clientId}`;
				const sessions: [Session] = result.recordset;
				console.log(`************sessions************`);
				console.log(sessions);
				console.log(`********END sessions************`);
				return sessions;
			} catch (error) {
				console.log('error logging in:', error);
				throw new Error(error.toString());
			}
		},
	},
	Mutation: {
		deleteSessions: async (root, args, context) => {
			const { sessions } = args;
			const { sql } = context;

			const sqlLine = `delete from session where entityId in (${sessions.sessions.join(
				','
			)})`; //delete from session where entityId in (1,2,3,4)

			// const result =
			// 	await sql.query`delete from session where entityId in (${clientId})`;

			return { success: true };
		},
	},
};

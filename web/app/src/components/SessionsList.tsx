import React, { useEffect, useState } from 'react';
import {
	useGetPurchaseSessionsQuery,
	Session,
	useRemovePurchaseSessionsMutation,
} from '../generated/graphql';
import { columns } from './DataTable/schemas/sessionList';
import { DataTable, RowMetadata } from './DataTable/DataTable';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ContentLayout } from './layout/ContentLayout';
import sessionListTrash from './sessionListTrash.svg';

type Params = {
	clientId: string;
	paymentId: string;
};

export const SessionsList = (): JSX.Element | null => {
	const [selectedRows, setSelectedRows] = useState<string[]>([]);
	const [tableData, setTableData] = useState<Session[]>([]);
	const { clientId, paymentId } = useParams<Params>();
	const { data, loading, error } = useGetPurchaseSessionsQuery({
		variables: {
			clientId: clientId, // '14118',
			paymentId: paymentId, //'2021-08-14 17:52:21.000',
		},
	});
	useEffect(() => {
		setTableData(data?.purchases as Session[]);
	}, [data]);

	const [removePurchaseSessionsMutation] =
		useRemovePurchaseSessionsMutation();

	if (loading || error) {
		return null;
	}

	const removeSessions = async () => {
		const sessions = await removePurchaseSessionsMutation({
			variables: {
				sessionIds: selectedRows,
				clientId,
				paymentId: paymentId,
			},
		});

		setTableData(sessions as Session[]);
	};

	return (
		<ContentLayout
			title='Payment Management'
			LeftComponent={() => (
				<StyledButton onClick={removeSessions}>
					<img src={sessionListTrash} alt='Remove Session' />
				</StyledButton>
			)}>
			<DataTable<Session>
				bulkSelection={true}
				columns={columns}
				tableData={tableData}
				identityColumn='EntityId'
				rowDecorator={(r) => {
					const x = r as Session;
					if (x.SessionUsed) {
						return StyledWarningRow;
					}
				}}
				metadataDecorator={(r): RowMetadata => {
					const x = r as Session & { metadata: RowMetadata };
					if (x.TrainerPaid) {
						return { ...x.metadata, disabled: true };
					}
					return x.metadata;
				}}
				setSelectedRows={setSelectedRows}
			/>
		</ContentLayout>
	);
};

const StyledWarningRow = styled.div`
	background-color: ${(props) => props.theme.color.alertError};
`;

const StyledButton = styled.button`
	margin: 8px 0 0 12px;
	height: 30px;
`;

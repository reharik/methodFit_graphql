import React from 'react';
import { RowCell } from './RowCell';
import { TableColumn } from './DataTable';
import styled from 'styled-components';

type TableRowProps<T> = {
	columns: TableColumn<T>[];
	dataRow: T;
};
const Row = <T,>({
	columns,
	dataRow,
}: TableRowProps<T>): JSX.Element | null => {
	const cells = columns.map((column, idx) => {
		let dataValue = dataRow[column.propertyName as keyof T];
		let component;
		if (column.formatProperty) {
			dataValue = column.formatProperty({ column, value: dataValue });
		}
		if (column.rowColumnComponent) {
			component = column.rowColumnComponent({
				column: column,
				value: dataValue,
				row: dataRow,
			});
		}

		return (
			<RowCell
				width={column.width || '100px'}
				text={component || dataValue}
				key={idx}
			/>
		);
	});

	return <StyledRow>{cells}</StyledRow>;
};

export { Row };

const StyledRow = styled.div`
	border-bottom: 1px solid #e0e0e0;
	border-collapse: collapse;
	display: flex;

	&:nth-child(even) {
		background-color: #f6f6f6;
	}
`;

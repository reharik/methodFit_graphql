import React from 'react';
import { RowCell } from './RowCell';
import styled from 'styled-components';
import { TableRowProps } from './types.d';

const Row = <T,>({
	columns,
	dataRow,
	rowDecorator,
}: TableRowProps<T>): JSX.Element | null => {
	const cells = columns.map((column, idx) => {
		let dataValue = dataRow[column.propertyName as keyof T];
		let component;
		if (column.formatProperty) {
			dataValue = column.formatProperty({
				column,
				value: dataValue,
				row: dataRow,
			});
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

	const Decorator = rowDecorator ? rowDecorator(dataRow) : undefined;
	if (Decorator) {
		return (
			<Decorator dataRow={dataRow}>
				<StyledRow>{cells}</StyledRow>
			</Decorator>
		);
	}
	return <StyledRow>{cells}</StyledRow>;
};

export { Row };

const StyledRow = styled.div(
	({ theme: { boxShadow } }) => `
 	border-bottom: 1px solid #e0e0e0;
	border-collapse: collapse;
	display: flex;
	height: 24px;
	
	transition: 0.15s ease all;


	&:nth-child(even) {
		background-color: #f6f6f6;
	}

	&:hover {
		box-shadow: ${boxShadow.standard};
		position: relative;
		top: 0;
		z-index: 2;
	}
	`
);

import React, { useState } from 'react';
import { TableColumn, SortDir } from './DataTable';
import styled from 'styled-components';

type HeaderCellProps<T> = {
	column: TableColumn<T>;
	value: string | JSX.Element;
	onSortData: (sortDir: SortDir, sortProperty: string) => void;
};

const HeaderCell = <T,>({
	column,
	value,
	onSortData,
}: HeaderCellProps<T>): JSX.Element | null => {
	const [sortDir, setSortDir] = useState(SortDir.desc);
	const onSort = () => {
		onSortData(
			sortDir || SortDir.asc,
			column.sortProperty || column.propertyName
		);
		setSortDir((sortDir) =>
			!sortDir || sortDir === SortDir.desc ? SortDir.asc : SortDir.desc
		);
	};
	const sortProp = column.sortable ? { onClick: () => onSort() } : {};
	return (
		<StyledHeaderCell width={column.width || '100px'} {...sortProp}>
			{value}
			{column.sortable ? <StyledAsc>^</StyledAsc> : null}
		</StyledHeaderCell>
	);
};

export { HeaderCell };
interface StyledHeaderCellProps {
	width?: string;
}

const StyledHeaderCell = styled.div<StyledHeaderCellProps>(
	({ width }) => `
		width: ${width};
    	border-left: 1px solid #d3d3d3;
		&:first-child {
    		border-left: none;
		}
	`
);

const StyledAsc = styled.span`
	width: 16px;
	height: 10px;
	text-align: center;
	font-weight: bold;
`;

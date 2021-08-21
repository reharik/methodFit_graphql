import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderCellProps, SortDir } from './types.d';
import { SortArrow } from './SortArrow';

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
			<StyledSpan>{value}</StyledSpan>
			{column.sortable ? <SortArrow sortDir={sortDir} /> : null}
		</StyledHeaderCell>
	);
};

export { HeaderCell };
interface StyledHeaderCellProps {
	width?: string;
}

const StyledHeaderCell = styled.div<StyledHeaderCellProps>(
	({ width, theme: { color, spacing } }) => `
	padding: 0 ${spacing.sm};
	box-sizing: border-box;
	width: ${width};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	transition: 0.2s ease all;
	
	&:first-child {
		border-left: none;
	}

	&:hover {
		background: ${color.cellHoverBg};
		cursor: pointer;
	}
	`
);

const StyledSpan = styled.span(
	({ theme: { weight } }) => `
	dispaly: flex;
	align-items: center;
	height: auto;
	margin: 0;
	font-weight: ${weight.medium};
	`
);

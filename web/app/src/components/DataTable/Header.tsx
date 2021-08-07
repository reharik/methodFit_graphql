import React from 'react';
import { HeaderCell } from './HeaderCell';
import { TableColumn, SortDir } from './DataTable';
import titleize from 'titleize';
import humanizeString from 'humanize-string';
import styled from 'styled-components';

type HeaderProps<T> = {
	columns: TableColumn<T>[];
	onSortData: (sortDir: SortDir, sortProperty: string) => void;
};
const Header = <T,>({ columns, onSortData }: HeaderProps<T>): JSX.Element => {
	return (
		<StyledHeader>
			{columns.map((column, idx) => {
				let value;
				if (column.headerColumnComponent) {
					value = column.headerColumnComponent({ column });
				} else if (column.headerDisplay) {
					value = column.headerDisplay;
				} else {
					value = titleize(
						humanizeString(column.propertyName as string)
					);
				}
				return (
					<HeaderCell
						value={value}
						column={column}
						key={idx}
						onSortData={onSortData}
					/>
				);
			})}
		</StyledHeader>
	);
};

export { Header };

const StyledHeader = styled.div`
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcCAIAAAAvP0KbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADJJREFUeNpUw8kNADAIAzD2HxXCOUHVPqJiyTIzcnc3V9WamRwRr7uvANjMWFX/R4ABAC0FTgS3LmP1AAAAAElFTkSuQmCC)
		repeat-x scroll 0 0 transparent;
	background-color: #ffeedb;
	border-bottom: 1px solid #e0e0e0;
	color: #555555;
	font-size: 11px;
	font-weight: bold;
	height: 28px;
	display: flex;
`;

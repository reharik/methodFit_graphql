import React from 'react';
import styled from 'styled-components';

type TableRowCellProps<T> = {
	width: string;
	text: T[keyof T] | JSX.Element;
};

const RowCell = <T,>({ text, width }: TableRowCellProps<T>): JSX.Element => {
	return <StyledRowCell width={width}>{text}</StyledRowCell>;
};

export { RowCell };

interface StyledRowCellProps {
	width?: string;
}

const StyledRowCell = styled.div<StyledRowCellProps>(
	({ width }) => `
		width: ${width}
`
);

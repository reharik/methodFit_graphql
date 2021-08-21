import styled from 'styled-components';
import { TableRowCellProps } from './types.d';

const RowCell = <T,>({ text, width }: TableRowCellProps<T>): JSX.Element => {
	return <StyledRowCell width={width}>{text}</StyledRowCell>;
};

export { RowCell };

interface StyledRowCellProps {
	width?: string;
}

const StyledRowCell = styled.div<StyledRowCellProps>(
	({ width, theme: { spacing } }) => `
	padding: ${spacing.xs} ${spacing.sm};	
	width: ${width};
	display: flex;
	align-items: center;
	justify-content: flex-start;
`
);

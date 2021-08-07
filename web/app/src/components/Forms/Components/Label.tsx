import styled from 'styled-components';
import { LinusInputChildrenProps } from './../../../types';

// The trailing comma in  <ObjectType, > is added due to constraints of the  .tsx file extension.
// You can read more in the TypeScript Generics. Discussing naming conventions
// https://wanago.io/2020/02/17/typescript-generics-discussing-naming-conventions/
export const Label = <T,>({
	name,
	value,
	placeholder,
}: LinusInputChildrenProps<T>): JSX.Element => {
	return <StyledLabel htmlFor={name}>{value ? placeholder : ''}</StyledLabel>;
};

const StyledLabel = styled.label(
	({ theme: { color } }) => `
	position: absolute;
	top: 12px;
	left: 18px;
	font-size: 12px;
	color: ${color.label};
	transition: 0.2s ease all;
	`
);

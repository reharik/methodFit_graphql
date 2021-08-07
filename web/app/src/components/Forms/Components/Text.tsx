import styled from 'styled-components';
import { LinusInputChildrenProps } from '../../../types';
import humanizeString from 'humanize-string';
import titleize from 'titleize';
import { Field } from 'formik';
import { definedProps } from './definedProps';

export const Text = <T,>(props: LinusInputChildrenProps<T>): JSX.Element => {
	const definedProps_ = definedProps(props);
	const placeholder =
		props.placeholder ||
		titleize(
			humanizeString(
				typeof definedProps_.name === 'string' ? definedProps_.name : ''
			)
		);

	return <StyledField {...definedProps_} placeholder={placeholder} />;
};

const StyledField = styled(Field)(
	({ value, error, theme: { color } }) => `
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	background: ${color.white};
	box-sizing: border-box;
	padding-left: 16px;
	color: ${color.formText};
	font-size: 16px;
	transition: 0.2s ease all;
	border: 2px solid ${error ? color.formError : color.formDefault};
	padding-top: ${value ? '20px' : '0px'};

	&::placeholder {
		color: ${color.formText};
	}

	&:hover {
		border: 2px solid #087dae;
	}

	&:focus {
		border: 2px solid #087dae;
		outline: none;
	}
	`
);

import styled from 'styled-components';
import { Field } from 'formik';
import { LinusInputChildrenProps, DropdownOption } from './../../../types';
import { definedProps } from './definedProps';

const Dropdown = <T,>(props: LinusInputChildrenProps<T>): JSX.Element => {
	const definedProps_ = definedProps(props);
	const dropdownOptions = definedProps_.DropdownOptions as DropdownOption[];

	return (
		<StyledSelectField {...definedProps_} as='select'>
			<option value=''>
				{definedProps_.placeholder || 'Please Select'}
			</option>
			{(dropdownOptions || []).map((option: DropdownOption) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</StyledSelectField>
	);
};

const StyledSelectField = styled(Field)(
	({ value, error, theme: { color } }) => `
	display: flex;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	background: ${color.white};
	box-sizing: border-box;
	padding-left: 13px;
	color: ${color.formText};
	font-size: 16px;
	transition: 0.2s ease all;
	border: 2px solid ${error ? color.formError : color.formDefault};
	padding-top: ${value ? '20px' : '0px'};
	align-items: center;

	&:hover {
		border: 2px solid #087dae;
	}

	&:focus {
		border: 2px solid #087dae;
		outline: none;
	}
	`
);

export { Dropdown };

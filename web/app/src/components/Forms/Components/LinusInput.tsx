import styled from 'styled-components';
import { Input } from './Input';
import { Label } from './Label';
import { useField, ErrorMessage } from 'formik';
import { FormElementProps } from './../../../types';

export const LinusInput = (props: FormElementProps): JSX.Element => {
	const [field, meta] = useField(props.name);
	return (
		<StyledContainer>
			<Label {...props} value={field.value} />
			<Input {...props} value={field.value} error={meta.error} />
			<ErrorMessage name={field.name}>
				{(msg) => <StyledErrorText>{msg}</StyledErrorText>}
			</ErrorMessage>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	position: relative;
	margin: 16px 0;
	width: 317px;
	height: 64px;
`;

const StyledErrorText = styled.div(
	({ theme: { color } }) => `
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${color.formError};
	`
);

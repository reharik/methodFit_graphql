import styled from 'styled-components';

const FormElementError = styled.div(
	({ theme: { color } }) => `
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: ${color.formError};
	`
);

export { FormElementError };

import * as yup from 'yup';

export type ForgotPasswordModel = {
	username: string;
};

export const getModel = (): ForgotPasswordModel => {
	return { username: '' };
};

export const forgotPasswordSchema = yup.object().shape({
	username: yup.string().email('Invalid email address').required('Required'),
});

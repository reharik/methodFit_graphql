import { Amplify } from 'aws-amplify';
const cognitoConfig = (): void => {
	Amplify.configure({
		Auth: {
			region: process.env.REACT_APP_REGION,
			userPoolId: process.env.REACT_APP_USER_POOL_ID,
			userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
			oauth: {
				scope: ['email', 'openid'],
			},
		},
	});
};

export { cognitoConfig };

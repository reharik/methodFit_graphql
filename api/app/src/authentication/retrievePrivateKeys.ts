import { config } from '../../config';
import axios from 'axios';
import { AuthenticationError } from 'apollo-server-koa';
import { PrivateKeys } from './../types';

const { reactAppRegion, reactAppUserPoolId } = config;
const privateKeyUrl = `https://cognito-idp.${reactAppRegion}.amazonaws.com/${reactAppUserPoolId}/.well-known/jwks.json`;

export const retrievePrivateKeys = async (): Promise<PrivateKeys> => {
	const response = await axios.get(privateKeyUrl);
	if (response.status != 200) {
		throw new AuthenticationError('Failed to get private keys');
	}
	return response.data.keys as PrivateKeys;
};

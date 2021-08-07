import { JwtPayload } from 'jsonwebtoken';
import { retrievePrivateKeys } from './retrievePrivateKeys';
import { validateToken } from './verifyWebToken';
import { PrivateKeys } from './../types';

const HEADER_NAME = 'authorization';
let cachedPrivateKeys: PrivateKeys = [];

const getDecodedToken = async (
	authToken: string
): Promise<JwtPayload | undefined> => {
	let decodedToken = await validateToken(authToken, cachedPrivateKeys);

	if (!decodedToken) {
		cachedPrivateKeys = await retrievePrivateKeys();
	}

	decodedToken = await validateToken(authToken, cachedPrivateKeys);
	return decodedToken;
};

export const validateJWT = async (req: {
	header: { [x: string]: string };
}): Promise<string | undefined> => {
	const authToken = req.header[HEADER_NAME] || '';
	if (!authToken) {
		return;
	}
	const decodedToken = await getDecodedToken(
		authToken.replace('Bearer ', '')
	);

	return decodedToken?.email;
};

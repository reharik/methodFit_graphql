import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';
import jwkToPem, { RSA } from 'jwk-to-pem';
import { PrivateKeys, Pkey } from './../types';

const validateToken = async (
	token: string,
	jsonWebKeys: PrivateKeys
): Promise<JwtPayload | undefined> => {
	try {
		const header = decodeTokenHeader(token); // {"kid":"XYZAAAAAAAAAAAAAAA/1A2B3CZ5x6y7MA56Cy+6abc=", "alg": "RS256"}
		const jsonWebKey = getJsonWebKeyWithKID(header, jsonWebKeys);
		if (jsonWebKey) {
			return await verifyJsonWebTokenSignature(token, jsonWebKey);
		}
	} catch (err) {
		console.log(`************err************`);
		console.log(err);
		console.log(`********END err************`);
		throw err;
	}
};

const decodeTokenHeader = (token: string): Pkey => {
	const [headerEncoded] = token.split('.');
	return JSON.parse(Buffer.from(headerEncoded, 'base64').toString('ascii'));
};

const getJsonWebKeyWithKID = (
	header: Pkey,
	jsonWebKeys: JwtPayload
): Pkey | undefined => {
	for (let i = 0; i < jsonWebKeys.length; i++) {
		if (
			jsonWebKeys[i].kid === header.kid &&
			jsonWebKeys[i].alg === header.alg
		) {
			return jsonWebKeys[i];
		}
	}
};

const verifyJWTAsync = (token: string, pem: string): Promise<JwtPayload> =>
	new Promise((res, rej) => {
		return jsonwebtoken.verify(
			token,
			pem,
			{ algorithms: ['RS256'] },
			(err, decodedToken) => {
				if (err) {
					return rej(err);
				}
				if (!decodedToken) {
					throw new Error('Unable to decode token');
				}
				return res(decodedToken);
			}
		);
	});

const verifyJsonWebTokenSignature = async (
	token: string,
	jsonWebKey: Pkey
): Promise<JwtPayload> => {
	const pem = jwkToPem(jsonWebKey as RSA);
	return await verifyJWTAsync(token, pem);
};

export { validateToken };

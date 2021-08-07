export type PrivateKeys = Pkey[];
export type Pkey = {
	alg: string;
	e: string;
	kid: string;
	kty: string;
	n: string;
	use: string;
};

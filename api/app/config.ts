import { config as config_ } from 'dotenv';
import { getValidValue } from './src/typeGuard';

const nodeEnvs = ['development', 'ci', 'qa', 'production'];
type NodeEnv = typeof nodeEnvs[number];

export type Config = {
	nodeEnv: NodeEnv;
	// should be specific options once we know what they will be
	logging_level: string;
	// should be specific options once we know what they will be
	logging_transports: string;
	apiHost: string;
	apiPort: number;
	apiProtocol: string;
	apiDomain: string;
	dbUser: string;
	dbPassword: string;
	dbName: string;
	dbServer: string;
};

let instantiatedDotEnv;

if (!instantiatedDotEnv) {
	instantiatedDotEnv = config_();
}
const config = {
	nodeEnv: getValidValue<NodeEnv>(
		process.env.NODE_ENV || 'development',
		nodeEnvs
	),
	logging_level: process.env.LOGGING_LEVEL || 'INFO',
	// list of logging outputs e.g. console, logly, someother transport
	logging_transports: process.env.LOGGING_TRANSPORTS || 'console',
	apiHost: process.env.API_HOST || '0.0.0.0',
	apiPort: isNaN(parseInt(process.env.API_PORT || '', 10))
		? 3000
		: parseInt(process.env.API_PORT || '', 10),
	apiProtocol: process.env.API_PROTOCOL || 'http',
	apiDomain: process.env.API_DOMAIN || 'graphql',
	dbUser: process.env.DB_USER || '',
	dbPassword: process.env.DB_PASSWORD || '',
	dbName: process.env.DB_NAME || '',
	dbServer: process.env.DB_SERVER || '',
};

export { config };

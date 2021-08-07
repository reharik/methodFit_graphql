import { getValidValue } from './typeGuard';

const nodeEnvs = ['development', 'ci', 'qa', 'production'];
type NodeEnv = typeof nodeEnvs[number];

type Config = {
	nodeEnv: NodeEnv;
	// should be specific options once we know what they will be
	logging_level: string;
	// should be specific options once we know what they will be
	logging_transports: string;
	host: string;
	port: number;
	apiHost: string;
	apiPort: number;
	apiDomain: string;
	apiProtocol: string;
};

export const config: Config = {
	nodeEnv: getValidValue<NodeEnv>(
		process.env.NODE_ENV || 'development',
		nodeEnvs
	),
	logging_level: process.env.LOGGING_LEVEL || 'INFO',
	// list of logging outputs e.g. console, logly, someother transport
	logging_transports: process.env.LOGGING_TRANSPORTS || 'console',
	host: process.env.HOST || '0.0.0.0',
	port: isNaN(parseInt(process.env.PORT || '', 10))
		? 3000
		: parseInt(process.env.API_PORT || '', 10),
	apiHost: process.env.API_HOST || '0.0.0.0',
	apiPort: isNaN(parseInt(process.env.API_PORT || '', 10))
		? 3000
		: parseInt(process.env.API_PORT || '', 10),
	apiDomain: process.env.API_DOMAIN || 'graphql',
	apiProtocol: process.env.API_PROTOCOL || 'http',
};

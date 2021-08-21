import sql from 'mssql';
import { config } from './../config';

const sqlConfig = {
	user: config.dbUser,
	password: config.dbPassword,
	database: config.dbName,
	server: config.dbServer,
	port: 1433,
	options: {
		trustServerCertificate: true,
	},
};

export type SQL = sql.ConnectionPool;
export type ContextType = { sql: SQL };

export const buildContext = async (/*{req}*/): Promise<ContextType> => {
	const sqlConnectionPool = await sql.connect(sqlConfig);
	return { sql: sqlConnectionPool };
};

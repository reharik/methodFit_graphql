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
console.log(`************sqlConfig************`);
console.log(sqlConfig);
console.log(`********END sqlConfig************`);

export const buildContext = async (/*{req}*/): Promise<unknown> => {
	try {
		await sql.connect(sqlConfig);
	} catch (err) {
		console.log(`************"WTF"************`);
		console.log(err);
		console.log(`********END "WTF"************`);
	}
	return { sql };
};

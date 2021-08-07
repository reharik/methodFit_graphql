import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { resolvers, typeDefs } from './src/schema';
import { Config, config } from './config';
import { buildContext } from './src/contextProvider';

const createUri = (config: Config) => {
	return `${config.apiProtocol}://${config.apiHost}:${config.apiPort}/${config.apiDomain}`;
};

async function startApolloServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: buildContext,
	});
	await server.start();

	const app = new Koa();
	server.applyMiddleware({ app });
	// alternatively you can get a composed middleware from the apollo server
	// app.use(server.getMiddleware());

	app.listen({ port: config.apiPort });
	console.log(`🚀 Server ready at ${createUri(config)}`);
	return { server, app };
}

startApolloServer();

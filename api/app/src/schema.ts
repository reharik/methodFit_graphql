import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const resolvers = loadFilesSync(path.join(__dirname, './resolvers'));

const schemas = loadFilesSync(path.join(__dirname, './typeDefs'), {
	extensions: ['graphql'],
});

const typeDefs = mergeTypeDefs(schemas);

export { typeDefs, resolvers };

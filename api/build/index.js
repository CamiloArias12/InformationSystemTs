import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source.js";
import { resolvers } from "./resolvers/index.js";
await AppDataSource.initialize();
const schema = await buildSchema({
    resolvers: resolvers,
    validate: { forbidUnknownValues: false }
});
const server = new ApolloServer({
    schema: schema,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 8080 }
});
console.log(url);
//# sourceMappingURL=index.js.map
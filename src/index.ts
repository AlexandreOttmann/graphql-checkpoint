import "reflect-metadata";
import datasource from "./lib/datasource";
import { ApolloServer } from '@apollo/server';
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from '@apollo/server/standalone';

import CountryResolver from "./resolvers/country.resolver";


// const countries = [
//   { id: 1, name: 'United States', code: 'US', emoji: '🇺🇸' },
//   { id: 2, name: 'Canada', code: 'CA', emoji: '🇨🇦' },
//   { id: 3, name: 'United Kingdom', code: 'GB', emoji: '🇬🇧' },
// ];


async function main() {


  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: false,
  });

  const server = new ApolloServer({
    schema
  });

  await datasource.initialize()

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
main();
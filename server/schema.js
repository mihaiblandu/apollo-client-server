import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./types/merge";
import resolvers from "./resolvers/merge";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
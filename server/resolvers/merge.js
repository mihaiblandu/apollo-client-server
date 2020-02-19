import { mergeResolvers } from"merge-graphql-schemas";
import User from"./userResolver";

const resolvers= [User];

export default mergeResolvers(resolvers);
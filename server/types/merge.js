import { mergeTypes } from "merge-graphql-schemas";

import User from "./userType";

const typeDefs = [User];

export default mergeTypes(typeDefs, { all: true });
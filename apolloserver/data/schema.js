import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { GraphQLScalarType } from 'graphql/type';
import { Kind } from 'graphql/language';
import resolvers from './resolvers';
//import mocks from './mocks';



const typeDefs = `
type User {
  _id: String
  email: String
  jwt: String
}

type Query {
  currentUser: User
}

 type Mutation {

  login(email: String!, password: String!): User
  signup(email: String!, password: String!): User
}
`;

// Add resolvers option to this call
const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default schema;
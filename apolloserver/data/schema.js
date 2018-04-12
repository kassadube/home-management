import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { GraphQLScalarType } from 'graphql/type';
import { Kind } from 'graphql/language';
import resolvers from './resolvers';
//import mocks from './mocks';


const typeDefs = `
scalar DateTime

type Query {
  author(firstName: String, lastName: String): Author
  allAuthors: [Author]
  allOptions: [Option]  
  getFortuneCookie: String @cacheControl(maxAge: 5)
}
# The mutation root type, used to define all mutations.
type Mutation {
  addOption(contract: Int, type: String, period: String, expiration: DateTime) : Option
}
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
type Option {
  id: Int
  contract: Int
  type: String
  period: String
  expiration: DateTime
}
`;

// Add resolvers option to this call
const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default schema;
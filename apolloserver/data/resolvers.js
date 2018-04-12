import { Author, View, FortuneCookie, Option } from './connectors';
import { GraphQLScalarType } from 'graphql/type';
import { Kind } from 'graphql/language';

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  parseValue(value) {
    console.log('parseValue');
    return new DateTime(value); // value from the client
  },
  serialize(value) {
    console.log('serialize');
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
    console.log('parseLiteral');
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  }
});
const resolvers = {
  DateTime : new GraphQLScalarType({
    name: 'DateTime',
    parseValue(value) {
      console.log('parseValue');
      return new DateTime(value); // value from the client
    },
    serialize(value) {
      console.log('serialize');
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      console.log('parseLiteral',ast);
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return ast.value;
    }
  }),
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    allAuthors(_, args) {
      return Author.findAll();
    },
    allOptions(_, args) {
      return Option.findAll();
    },
    getFortuneCookie() {
      return FortuneCookie.getOne();
    }
  },
  Mutation: {
    addOption(_, args){
      console.log("ARRRRRR =", args);
      Option.insertOrUpdate(args);
    }
  },
  Author: {
    posts(author) {
      console.log('hhhehh');
      return author.getPosts();
    }
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    views(post) {
      return View.findOne({ postId: post.id }).then(view => view.views);
    }
  }
};

export default resolvers;
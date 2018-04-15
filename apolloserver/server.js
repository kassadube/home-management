import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import compression from 'compression';
import bodyParser from 'body-parser';
import { Engine } from 'apollo-engine';

import schema from './data/schema';
import {context} from './data/resolvers';

const GRAPHQL_PORT = 3005;
const ENGINE_API_KEY = 'service:kassadube-6396:ShoyHPokTjTDGjnw1kxjkA'; // TODO

const engine = new Engine({
  engineConfig: {
    apiKey: ENGINE_API_KEY,
    stores: [
      {
        name: 'inMemEmbeddedCache',
        inMemory: {
          cacheSize: 20971520 // 20 MB
        }
      }
    ],
    queryCache: {
      publicFullQueryStore: 'inMemEmbeddedCache'
    }
  },
  graphqlPort: GRAPHQL_PORT
});
const contextFunction =
  context ||
  function(headers, secrets) {
    console.log('secrets', secrets);
    return Object.assign(
      {
        headers: headers,
      },
      secrets
    );
  };

engine.start();

const graphQLServer = express();

graphQLServer.use(engine.expressMiddleware());
graphQLServer.use(compression());

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress(async (request) =>{
  console.log("FDFDF");
  const context = await contextFunction(request.headers, process.env);
  const rootValue = {};// await rootFunction(request.headers, process.env);

  return {
    schema: await schema,
    rootValue,
    context,
    tracing: true,
  };
 }));

graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);

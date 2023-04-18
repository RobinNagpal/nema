import { ApolloServer, gql } from 'apollo-server-micro';
import { schema } from 'graphql/schema';
import { resolvers } from 'graphql/resolvers';
import Cors from 'micro-cors';
import { createContext } from 'graphql/context';
// import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const cors = Cors();

const apolloServer = new ApolloServer({
  schema,
  resolvers,
  context: createContext,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method == 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};

// const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
//   return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
// }

// export default handler

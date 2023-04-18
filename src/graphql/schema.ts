// graphql/schema.ts
// import { gql } from "apollo-server-micro"

// export const typeDefs = gql`
//   type Link {
//     id: ID
//     title: String
//     xpath: String
//     url: String
//     type: String
//     branch: String
//     users: [String]
//   }

//   type Query {
//     links: [Link]!
//   }
// `

import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from "./types"

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
    schema: join(process.cwd(), 'src', 'graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'src', 'graphql', 'context.ts'),
  },
});

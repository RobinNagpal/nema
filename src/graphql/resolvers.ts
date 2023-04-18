// /graphql/resolvers.ts

// import prisma from "lib/prisma";
// import { uniswapV3Contents } from "pages/api/contents/uniswapV3Contents";

// export const resolvers = {
//   Query: {
//     links: () => {
//       return uniswapV3Contents;
//     },
//   },
// };
export const resolvers = {
  Query: {
    links: async (_parent: any, _args: any, context: any) => await context.prisma.link.findMany(),
  },
};

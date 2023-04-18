import { extendType, inputObjectType, objectType } from 'nexus';
import { User } from './User';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('url');
    t.string('type');
    t.string('branch');
    t.string('xpath');
    // t.list.field('users', {
    //   type: User,
    //   async resolve(parent, _args, context) {
    //     return await context.prisma.link
    //       .findUnique({
    //         where: {
    //           id: parent.id,
    //         },
    //       })
    //       .users();
    //   },
    // });
  },
});

export const CreateLinkInput = inputObjectType({
  name: 'CreateLinkInput',
  definition(t) {
    t.string('title');
    t.string('url');
    t.string('type');
    t.string('branch');
    t.string('xpath');
    t.string('id');
  },
});

export const UpdateLinkInput = inputObjectType({
  name: 'UpdateLinkInput',
  definition(t) {
    t.nonNull.string('id');
    t.string('title');
    t.string('url');
    t.string('type');
    t.string('branch');
    t.string('xpath');
    t.string('id');
  },
});

export const LinkMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createLink', {
      type: 'Link',
      args: {
        data: 'CreateLinkInput',
      },
      async resolve(_parent, { data }, context) {
        const link = await context.prisma.link.create({
          data: {
            title: data.title,
            url: data.url,
            type: data.type,
            branch: data.branch,
            xpath: data.xpath,
          },
        });
        return link;
      },
    });

    t.nonNull.field('updateLink', {
      type: 'Link',
      args: {
        data: 'UpdateLinkInput',
      },
      async resolve(_parent, { data }, context) {
        const link = await context.prisma.link.update({
          where: {
            id: data.id,
          },
          data: {
            title: data.title,
            url: data.url,
            type: data.type,
            branch: data.branch,
            xpath: data.xpath,
          },
        });
        return link;
      },
    });

    t.nonNull.field('deleteLink', {
      type: 'Link',
      args: {
        id: 'String',
      },
      async resolve(_parent, { id }, context) {
        const link = await context.prisma.link.delete({
          where: {
            id,
          },
        });
        return link;
      },
    });
  },
});


import {Profile} from 'nexus-prisma';
import {objectType, extendType} from 'nexus';
import {type Context} from '../../context';

export default [
  objectType({
    name: Profile.$name,
    description: Profile.$description,
    definition(t) {
      t.field(Profile.id);
      t.field(Profile.name);
    },
  }),
  extendType({
    type: 'Query',
    definition(t) {
      t.list.field('profiles', {
        type: Profile.$name,
        description: 'Returns all profiles.',
        resolve: async (_, __, context: Context) =>
          context.prisma.profile.findMany(),
      });
      t.field('profile', {
        type: Profile.$name,
        description: 'Returns a unique profile by id.',
        args: {
          id: Profile.id.type,
        },
        resolve(_, args, context: Context) {
          return context.prisma.profile.findUnique({
            where: {
              id: args.id,
            },
          });
        },
      });
    },
  }),
  extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('createProfile', {
        type: Profile.$name,
        args: {
          accountId: Profile.accountId.type,
          name: Profile.name.type,
        },
        resolve: (_, {accountId, name}, context: Context) =>
          context.prisma.profile.create({
            data: {
              accountId,
              name,
            },
          }),
      });
    },
  }),
];

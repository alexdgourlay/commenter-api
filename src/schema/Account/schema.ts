import {Account} from 'nexus-prisma';
import {objectType, extendType} from 'nexus';
import { type Context } from '../../server';

export default [
  objectType({
    name: Account.$name,
    description: Account.$description,
    definition(t) {
      t.field(Account.id);
      t.field(Account.email);
      t.field(Account.password);
      t.field(Account.profiles);
    },
  }),
  extendType({
    type: 'Query',
    definition(t) {
      t.list.field('accounts', {
        type: Account.$name,
        description: 'Returns all accounts.',
        resolve: async (_, __, context: Context) =>
          context.prisma.account.findMany(),
      });
      t.field('account', {
        type: Account.$name,
        description: 'Returns a unique account by id.',
        args: {
          id: Account.id.type,
        },
        resolve(_, {id}, context: Context) {
          return context.prisma.account.findUnique({
            where: {
              id,
            },
          });
        },
      });
    },
  }),
];

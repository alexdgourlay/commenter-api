import {Domain} from 'nexus-prisma';
import {extendType, objectType} from 'nexus';
import { Context } from '../../server';

export default [
  objectType({
    name: Domain.$name,
    description: Domain.$description,
    definition(t) {
      t.field(Domain.id);
      t.field(Domain.domain);
      t.field(Domain.icon);
      t.field(Domain.webAddresses);
    },
  }),
  extendType({
    type: 'Query',
    definition(t) {
      t.field('domain', {
        type: Domain.$name,
        description: 'Returns a unique domain by id.',
        args: {
          id: Domain.id.type,
        },
        resolve: async (_, {id}, context: Context) =>
          context.prisma.domain.findUnique({
            where: {
              id,
            },
          }),
      });
    },
  }),
];

import {Domain, Post} from 'nexus-prisma';
import {objectType, extendType} from 'nexus';
import {type Context} from '../../context';

export default [
  objectType({
    name: Post.$name,
    description: Post.$description,
    definition(t) {
      t.field(Post.id);
      t.field(Post.comments);
      t.field(Post.title);
      t.field(Post.webAddress);

      t.field('_count', {
        type: `${Post.$name}Count`,
      });
    },
  }),

  objectType({
    name: `${Post.$name}Count`,
    description: 'Aggregated count data for a post.',
    definition(t) {
      t.int('comments', {description: 'Comment count.'});
    },
  }),

  extendType({
    type: 'Query',
    definition(t) {
      t.list.nonNull.field('posts', {
        type: Post.$name,
        description: 'Returns all posts.',
        async resolve(_, __, context: Context) {
          return context.prisma.post.findMany({
            include: {
              _count: {
                select: {comments: true},
              },
            },
          });
        },
      });

      t.list.nonNull.field('postsOnDomain', {
        type: Post.$name,
        description: 'Returns all posts for a domain.',
        args: {
          domain: Domain.domain.type,
        },
        async resolve(_, {domain}, context: Context) {
          return context.prisma.post.findMany({
            where: {
              webAddress: {
                domain: {
                  domain
                }
              },
            },
            include: {
              _count: {
                select: {comments: true},
              },
            },
          });
        },
      });

      t.field('post', {
        type: Post.$name,
        description: 'Returns a unique post by id.',
        args: {
          id: Post.id.type,
        },
        resolve(_, {id}, context: Context) {
          return context.prisma.post.findUnique({
            where: {
              id,
            },
          });
        },
      });
    },
  }),
];

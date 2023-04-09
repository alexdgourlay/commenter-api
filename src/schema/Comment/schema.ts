import {Comment, CommentContent, Domain, Post} from 'nexus-prisma';
import {objectType, extendType, stringArg, idArg} from 'nexus';
import { type Context } from '../../server';
import {createComment} from './resolver';

export default [
  objectType({
    name: Comment.$name,
    description: Comment.$description,
    definition(t) {
      t.field(Comment.id);
      t.field(Comment.postId);
      t.field(Comment.profile);
      t.field(Comment.content);
    },
  }),

  extendType({
    type: 'Query',
    definition(t) {
      t.field('comment', {
        type: Comment.$name,
        description: 'Returns a unique comment by id.',
        args: {
          id: Comment.id.type,
        },
        resolve(_, {id}, context: Context) {
          return context.prisma.comment.findUnique({
            where: {
              id,
            },
          });
        },
      });

      t.list.nonNull.field('comments', {
        type: Comment.$name,
        description: 'Returns all comments on a post.',
        args: {
          postId: Post.id.type,
        },
        async resolve(_, {postId}, context: Context) {
          return context.prisma.comment.findMany({
            where: {
              postId,
            },
          });
        },
      });
    },
  }),

  extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('createComment', {
        type: Comment.$name,
        args: {
          url: stringArg(),
          postId: idArg(),
          contentText: CommentContent.text.type,
        },
        resolve: (_, {postId, url, contentText}, context: Context) =>
          createComment(context, context.profileId, {
            contentText,
            postId: postId || undefined,
            url: url || undefined,
          }),
      });
    },
  }),
];

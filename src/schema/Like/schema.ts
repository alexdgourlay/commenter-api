import {Like, Post} from 'nexus-prisma';
import {extendType, objectType} from 'nexus';
import {Context} from '../../server';
import {likePost, unlikePost} from './resolver';
import { getPost } from '../Post/resolver';

export default [
  objectType({
    name: Like.$name,
    description: Like.$description,
    definition(t) {
      t.field(Like.id);
      t.field(Like.profileId);
      t.field(Like.postId);

      t.field({
        ...Like.post,
        // Override the default field resolver for post, to allow aggregate
        // fields on post to be returned e.g. _count.
        resolve: (like, _, context) => getPost(context, like.postId)
      });
    },
  }),

  extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('likePost', {
        type: Like.$name,
        description: 'Like a post.',
        args: {
          postId: Post.id.type,
        },
        resolve: (_, {postId}, context: Context) => likePost(context, postId),
      });

      t.nonNull.field('unlikePost', {
        type: Like.$name,
        description: 'Unlike a post.',
        args: {
          postId: Post.id.type,
        },
        resolve: (_, {postId}, context: Context) => unlikePost(context, postId),
      });
    },
  }),
];

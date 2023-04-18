import {Domain, Post} from 'nexus-prisma';
import {objectType, extendType} from 'nexus';
import {type Context} from '../../server';
import {getAllPosts, getPost, getPostsOnDomain} from './resolver';

export default [
  objectType({
    name: Post.$name,
    description: Post.$description,
    definition(t) {
      t.field(Post.id);
      t.field(Post.comments);
      t.field(Post.title);
      t.field(Post.webAddress);
      t.field(Post.previewImage);
      t.field(Post.likes);
      t.field(Post.createdAt);

      t.nonNull.field('liked', {
        type: 'Boolean',
        description: 'Has the profile like the post.',
        resolve: async (post, __, context: Context) =>
          // Find a like on this post made by the user.
          context.prisma.post
            .findFirst({
              where: {
                likes: {
                  some: {
                    postId: post.id,
                    profileId: context.profileId,
                  },
                },
              },
            })
            // Transform to boolean.
            .then(profileLike => (profileLike === null ? false : true)),
      });

      // Define count aggregate field.
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
      t.int('likes', {description: 'Like count.'});
    },
  }),

  extendType({
    type: 'Query',
    definition(t) {
      t.list.nonNull.field('posts', {
        type: Post.$name,
        description: 'Returns all posts.',
        resolve: (_, __, context: Context) => getAllPosts(context),
      });

      t.list.nonNull.field('postsOnDomain', {
        type: Post.$name,
        description: 'Returns all posts for a domain.',
        args: {
          domain: Domain.domain.type,
        },
        resolve: (_, {domain}, context: Context) =>
          getPostsOnDomain(context, domain),
      });

      t.field('post', {
        type: Post.$name,
        description: 'Returns a unique post by id.',
        args: {
          id: Post.id.type,
        },
        resolve: (_, {id}, context: Context) => getPost(context, id),
      });
    },
  }),
];

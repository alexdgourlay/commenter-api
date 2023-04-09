import {Post} from '@prisma/client';
import {Context} from '../../server';
import {postCountArg} from '../Post/resolver';

export const likePost = async (context: Context, postId: Post['id']) => {
  const existingLike = await context.prisma.like.findUnique({
    where: {
      postId_profileId: {
        postId: postId,
        profileId: context.profileId,
      },
    },
  });

  if (existingLike) {
    throw new Error('Like already exists for this profile and post.');
  }

  return context.prisma.like.create({
    data: {
      post: {
        connect: {
          id: postId,
        },
      },
      profile: {
        connect: {
          id: context.profileId,
        },
      },
    },
    include: {
      post: {
        include: {
          ...postCountArg,
        },
      },
    },
  });
};

export const unlikePost = async (context: Context, postId: Post['id']) => {
  return context.prisma.like.delete({
    where: {
      postId_profileId: {
        postId: postId,
        profileId: context.profileId,
      },
    },
  });
};

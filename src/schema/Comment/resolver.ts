import {
  type CommentContent,
  type Post,
  type Profile,
} from '@prisma/client';
import {createPost} from '../Post/resolver';
import {Context} from '../../server';

function createCommentOnPost(
  context: Context,
  profileId: Profile['id'],
  postId: Post['id'],
  contentText: CommentContent['text'],
) {
  return context.prisma.comment.create({
    data: {
      profile: {
        connect: {
          id: profileId,
        },
      },
      post: {
        connect: {
          id: postId,
        },
      },
      content: {
        create: {
          text: contentText,
        },
      },
    },
  });
}

export async function createComment(
  context: Context,
  profileId: Profile['id'],
  args: {
    contentText: CommentContent['text'];
    postId?: Post['id'];
    url?: string;
  },
) {
  if (args.postId !== undefined) {
    return createCommentOnPost(
      context,
      profileId,
      args.postId,
      args.contentText,
    );
  } else if (args.url !== undefined) {
    const post = await createPost(context, args.url);
    return createCommentOnPost(context, profileId, post.id, args.contentText);
  }

  throw new Error('Supply a postId or url.');
}

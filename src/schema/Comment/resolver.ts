import {
  type PrismaClient,
  type CommentContent,
  type Post,
  type Profile,
} from '@prisma/client';
import {createPost} from '../Post/resolver';

function createCommentOnPost(
  client: PrismaClient,
  profileId: Profile['id'],
  postId: Post['id'],
  contentText: CommentContent['text'],
) {
  return client.comment.create({
    data: {
      profileId,
      postId,
      content: {
        create: {
          text: contentText,
        },
      },
    },
  });
}

export async function createComment(
  client: PrismaClient,
  profileId: Profile['id'],
  args: {
    contentText: CommentContent['text'];
    postId?: Post['id'];
    url?: string;
  },
) {
  if (args.postId !== undefined) {
    return createCommentOnPost(
      client,
      profileId,
      args.postId,
      args.contentText,
    );
  } else if (args.url !== undefined) {
    const post = await createPost(client, args.url);
    return createCommentOnPost(client, profileId, post.id, args.contentText);
  }
}

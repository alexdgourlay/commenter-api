import {Domain, Post} from '@prisma/client';
import {Content__Output} from '../../__generated__/proto/scraper/Content';
import {ScraperClient} from '../../__generated__/proto/scraper/Scraper';
import {Context} from '../../server';

// Argument specifying count aggregation for Post prisma queries.
export const postCountArg = {
  _count: {
    select: {comments: true, likes: true},
  },
};

export async function getAllPosts(context: Context) {
  return context.prisma.post.findMany({
    include: {
      ...postCountArg,
    },
  });
}

export async function getPost(context: Context, postId: Post['id']) {
  return context.prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      ...postCountArg,
    },
  });
}

export async function getPostsOnDomain(
  context: Context,
  domain: Domain['domain'],
) {
  return context.prisma.post.findMany({
    where: {
      webAddress: {
        domain: {
          domain,
        },
      },
    },
    include: {
      ...postCountArg,
    },
  });
}

async function getContent(
  scraperClient: ScraperClient,
  url: string,
): Promise<Content__Output | undefined> {
  return new Promise((resolve, reject) => {
    scraperClient.getContent({url}, (err, content) => {
      err ? reject(err) : resolve(content);
    });
  });
}

export async function createPost(context: Context, url: string) {
  const urlObj = new URL(url);

  const content = await getContent(context.protoClients.scraper, url);

  return context.prisma.post.create({
    data: {
      title: content?.title || 'Fallback',
      previewImage: content?.image,
      webAddress: {
        connectOrCreate: {
          where: {
            hash: url,
          },
          create: {
            domain: {
              connectOrCreate: {
                where: {
                  domain: urlObj.host,
                },
                create: {
                  icon: content?.icon,
                  domain: urlObj.host,
                },
              },
            },
            hash: url,
          },
        },
      },
    },
  });
}

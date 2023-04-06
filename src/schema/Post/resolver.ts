import {PrismaClient} from '@prisma/client';

export function createPost(client: PrismaClient, url: string) {
  const urlObj = new URL(url);

  return client.post.create({
    data: {
      title: `A post on ${url.slice(0, 36)}`,
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

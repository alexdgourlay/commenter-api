import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {schema} from './schema';
import {ProtoClients, createProtoClients} from './proto';
import {client as prisma} from './prisma';
import { Profile } from '@prisma/client';

export type Context = {
  prisma: typeof prisma;
  protoClients: ProtoClients;
  profileId: Profile['id'];
};

export const start = async () => {
  const server = new ApolloServer<Context>({schema});

  const protoClients = await createProtoClients();

  const {url} = await startStandaloneServer(server, {
    context: async (): Promise<Context> => ({
      prisma,
      protoClients,
      profileId: '641f90e5568da2015019dd9b',
    }),
    listen: {port: 4000},
  });

  console.log(`🚀 Server ready at: ${url}`);
};

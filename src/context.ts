import {type Profile} from '@prisma/client';
import {client as prisma} from './prisma';

export type Context = {
  prisma: typeof prisma;
  profileId: Profile['id'];
};

export const createContext = async () => ({
  prisma,
  profileId: '641f90e5568da2015019dd9b',
});

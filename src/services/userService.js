import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (user) => {
  const userCreated = await prisma.artist.create({ data: { ...user } });
  return userCreated;
};

export default createUser;

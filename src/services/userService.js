import { PrismaClient } from '@prisma/client';
import cryptPassword from '../utils/password.js';
import generateToken from '../utils/token.js';

const prisma = new PrismaClient();

const createUser = async (user) => {
  const {
    name, artisticName, email, password, specialty, telephone,
  } = user;

  const hashPassword = cryptPassword(password);

  await prisma.artist.create({
    data: {
      name, artisticName, email, specialty, telephone, password: hashPassword,
    },
  });

  const token = generateToken({ email });

  return token;
};

export const loginUser = async (userData) => {
  const { email } = userData;

  const token = generateToken({ email });

  return token;
};

export default createUser;

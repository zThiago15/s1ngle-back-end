import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const verifyRegisterFieldsArtist = (req, res, next) => {
  const {
    email, password, artisticName, specialty, telephone,
  } = req.body;

  if (!email || !password || !artisticName || !specialty || !telephone) {
    return next({ message: 'Error: Required fields are missing!', status: 400 });
  }

  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    return next({ message: 'Error: Invalid e-mail', status: 400 });
  }

  if (password.length < 8) {
    return next({ message: 'Error: Password must have at least 8 characters', status: 400 });
  }

  return next();
};

export const validateUserDoesNotExist = async (req, res, next) => {
  const { email } = req.body;
  const userFound = await prisma.artist.findUnique({ where: { email } });

  if (userFound) {
    return next({ message: 'Error: User already exists! Make login instead', status: 400 });
  }

  next();
};

export default verifyRegisterFieldsArtist;

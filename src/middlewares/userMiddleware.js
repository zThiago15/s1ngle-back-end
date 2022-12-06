import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const verifyRegisterArtistFields = (req, res, next) => {
  const {
    email, password, name, artisticName, specialty, telephone,
  } = req.body;

  if (!email || !password || !artisticName || !specialty || !telephone || !name) {
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

  return next();
};

export default verifyRegisterArtistFields;

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const validateEmailAndPassword = ({ email, password }) => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    return { message: 'Error: Invalid e-mail', status: 400 };
  }

  if (password.length < 8) {
    return { message: 'Error: Password must have at least 8 characters', status: 400 };
  }

  return true;
};

const verifyRegisterArtistFields = (req, res, next) => {
  const {
    email, password, name, artisticName, specialty, telephone,
  } = req.body;

  if (!email || !password || !artisticName || !specialty || !telephone || !name) {
    return next({ message: 'Error: Required fields are missing!', status: 400 });
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

export const verifyLoginFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({ message: 'Error: E-mail and password are required!', status: 400 });
  }

  const response = validateEmailAndPassword(email, password);
  if (response.message) {
    next(response);
  }

  next();
};

export const validateUser = async (req, res, next) => {
  const { email } = req.body;

  const userClient = await prisma.artist.findUnique({ where: { email } });
  const userArtist = await prisma.client.findUnique({ where: { email } });

  if (!userClient && !userArtist) {
    return next({ message: 'Error: User not found', status: 404 });
  }

  return next();
};

export default verifyRegisterArtistFields;

import { Router } from 'express';
import createUser, { login } from '../controllers/userController.js';

import verifyRegisterArtistFields,
{ validateUser, validateUserDoesNotExist, verifyLoginFields } from '../middlewares/userMiddleware.js';

const userRoutes = Router();

userRoutes.post(
  '/register-artist',
  verifyRegisterArtistFields,
  validateUserDoesNotExist,
  createUser,
);
userRoutes.post('/login', verifyLoginFields, validateUser, login);

export default userRoutes;

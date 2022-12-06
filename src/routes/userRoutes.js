import { Router } from 'express';
import createUser from '../controllers/userController.js';

import verifyRegisterArtistFields,
{ validateUser, validateUserDoesNotExist, verifyLoginFields } from '../middlewares/userMiddleware.js';

const userRoutes = Router();

userRoutes.post(
  '/register-artist',
  verifyRegisterArtistFields,
  validateUserDoesNotExist,
  createUser,
);
userRoutes.post('/login', verifyLoginFields, validateUser);

export default userRoutes;

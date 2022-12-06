import { Router } from 'express';
import createUser from '../controllers/userController.js';

import verifyRegisterArtistFields, { validateUserDoesNotExist } from '../middlewares/userMiddleware.js';

const userRoutes = Router();

userRoutes.post(
  '/register-artist',
  verifyRegisterArtistFields,
  validateUserDoesNotExist,
  createUser,
);
// userRoutes.get('/login', login);

export default userRoutes;

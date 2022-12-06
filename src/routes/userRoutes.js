import { Router } from 'express';
import createUser from '../controllers/userController.js';

import verifyRegisterFieldsArtist, { validateUserDoesNotExist } from '../middlewares/userMiddleware.js';

const userRoutes = Router();

// userRoutes.post('/register-user', createUser);
userRoutes.post(
  '/register-artist',
  verifyRegisterFieldsArtist,
  validateUserDoesNotExist,
  createUser,
);
// userRoutes.get('/login', login);

export default userRoutes;

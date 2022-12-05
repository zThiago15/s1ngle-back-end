import { Router } from 'express';
import errorHandler from '../middlewares/errorHandler.js';
import createUser from '../controllers/userController.js';

import verifyRegisterArtistFields from '../middlewares/userMiddleware.js';

const userRoutes = Router();

// userRoutes.post('/register-user', createUser);
userRoutes.post(
  '/register-artist',
  verifyRegisterArtistFields,
  errorHandler,
  createUser
);
// userRoutes.get('/login', login);

export default userRoutes;

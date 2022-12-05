import { Router } from 'express';
import createUser from '../controllers/userController.js';

import verifyRegisterFieldsArtist from '../middlewares/userMiddleware.js';

const userRoutes = Router();

// userRoutes.post('/register-user', createUser);
userRoutes.post(
  '/register-artist',
  verifyRegisterFieldsArtist,
  createUser,
);
// userRoutes.get('/login', login);

export default userRoutes;

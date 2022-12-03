import { Router } from 'express';
import createUser from '../controllers/userController.js';

const userRoutes = Router();

userRoutes.post('/user', createUser);

export default userRoutes;

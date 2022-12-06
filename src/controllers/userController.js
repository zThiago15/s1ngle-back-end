import serviceCreateUser, { loginUser } from '../services/userService.js';

const createUser = async (req, res) => {
  const userData = req.body;
  const token = await serviceCreateUser(userData);

  return res.status(200).json({ token });
};

export const login = async (req, res) => {
  const userData = req.user;
  const token = await loginUser(userData);

  return res.status(200).json({ token });
};

export default createUser;

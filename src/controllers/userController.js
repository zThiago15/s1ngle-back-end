import serviceCreateUser from '../services/userService.js';

const createUser = async (req, res) => {
  const userData = req.body;
  const token = await serviceCreateUser(userData);

  return res.status(200).json({ token });
};

export default createUser;

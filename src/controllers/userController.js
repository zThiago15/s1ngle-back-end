import serviceCreateUser from '../services/userService.js';

const createUser = async (req, res) => {
  const userData = req.body;
  const userCreated = await serviceCreateUser(userData);

  return res.status(200).json(userCreated);
};

export default createUser;

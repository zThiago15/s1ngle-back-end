import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const secret = process.env.JWT_SECRET;

  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

export default generateToken;

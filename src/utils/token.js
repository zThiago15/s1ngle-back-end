import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

export const decodeToken = (token) => {
  const decoded = jwt.verify(token, secret);

  return decoded.data;
};

export default generateToken;

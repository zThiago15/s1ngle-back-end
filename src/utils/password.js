import bcrypt from 'bcrypt';

const cryptPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const checkPassword = (password, hash) => {
  const validPassword = bcrypt.compareSync(password, hash);
  return validPassword;
};

export default cryptPassword();

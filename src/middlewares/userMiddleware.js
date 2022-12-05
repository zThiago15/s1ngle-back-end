const verifyRegisterFieldsArtist = (req, res, next) => {
  const {
    email, password, artisticName, specialty, telephone,
  } = req.body;

  if (!email || !password || !artisticName || !specialty || !telephone) {
    return next({ message: 'Error: Required fields are missing!', status: 400 });
  }

  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    return next({ message: 'Error: Invalid e-mail', status: 400 });
  }

  if (password.length < 8) {
    return next({ message: 'Error: Password must have at least 8 characters', status: 400 });
  }

  return next();
};

export default verifyRegisterFieldsArtist;

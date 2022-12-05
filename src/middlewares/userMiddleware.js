const verifyRegisterArtistFields = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({ message: 'Error: Email and password fields required!', status: 400 });
  }

  next();
};

export default verifyRegisterArtistFields;

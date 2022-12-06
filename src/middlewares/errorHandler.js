const errorHandler = (error, req, res, next) => {
  const { message, status } = error;

  // operational errors
  if (status && message) {
    return res.status(status).json({ message });
  }

  // server errors
  console.error(error);
  return res.status(500).end();
};

export default errorHandler;

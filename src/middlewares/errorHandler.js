const errorHandler = (error, req, res, next) => {
  const { message, status } = error;

  return res.status(status).json({ message });
};

export default errorHandler;

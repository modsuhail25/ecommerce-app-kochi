const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode;
  let message = err.message;
  console.log(message);

  res.status(statusCode).json({
    message,
  });
};

export { notFound, errorHandler };

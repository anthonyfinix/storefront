module.exports = (req, res, next) => {
  res.status(404);
  const error = new Error("Route not found");
  return next(error);
};

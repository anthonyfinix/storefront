module.exports = async (req, res, next) => {
  res.set("Access-Control-Allow-Credentials", true);
  return next();
};

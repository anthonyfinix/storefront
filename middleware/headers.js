module.exports = async (req, res, next) => {
  console.log("************************************ Request Headers *******************************")
  console.log(req.headers)
  res.set("Access-Control-Allow-Credentials", true);
  console.log("************************************ Response Headers *******************************")
  console.log(res.getHeaders());
  return next();
};

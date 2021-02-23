module.exports = async (req, res, next) => {
  if (!req.user) return res.json({ error: "Please login" });
  if (req.user.role !== "admin") return res.json({ error: "No Authorisation" });
  return next();
};

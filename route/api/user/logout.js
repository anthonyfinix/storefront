module.exports = (req, res) => {
  if (!req.user) return res.json({ error: "Not Logged In" });
  req.session.destroy(() => res.json({ message: "success" }));
};

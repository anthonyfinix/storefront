const User = require("../../modal/user");
const joi_user = require("../../validation/joi.user");

module.exports = async (req, res) => {
  let { name } = req.body;
  let { error } = joi_user.validate({ name });
  if (error) return res.json({ error: error.details });
  let newUser = new User({ name });
  let response = await newUser.save();
  return res.json({message:response});
};

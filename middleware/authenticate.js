const User = require("../modal/user");
module.exports = async (req, res, next) => {
  let { user_id } = req.session;
  if (user_id) {
    let user = await User.findOne({ _id: user_id });
    if (!!user) req.user = user;
    return next();
  }
  return next();
};

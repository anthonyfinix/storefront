const User = require("../route/api/user/modal");
module.exports = async (req, res, next) => {
  let { user_id } = req.session;
  console.log(req.session.user_id);
  if (user_id) {
    let user = await User.findOne({ _id: user_id });
    if (!!user) req.user = user;
    return next();
  }
  return next();
};

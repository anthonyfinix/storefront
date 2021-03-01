const User = require("./modal");
module.exports = async ({
  name,
  username,
  contact_details,
  role,
  created_at,
  encryptedPassword,
  active
}) => {
  let user = new User({
    name,
    username,
    contact_details,
    active,
    role,
    created_at,
    password:encryptedPassword,
    active
  });
  try {
    await user.save();
    return { message: "success", user };
  } catch (e) {
    return e;
  }
};

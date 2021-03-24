const Customer = require("./modal");
module.exports = async (req, res) => {
  let count = await Customer.countDocuments({});
  return res.json({ message: "success", result: count });
};

const Customer = require("../../modal/customer");
module.exports = async (req, res) => {
  let customers = await Customer.find({});
  if (!customers.length) return res.json({ error: "No User Found" });
  res.json({ message: "Success", customers });
};

const Customer = require("./modal");
module.exports = async (req, res) => {
  let customers = await Customer.find({});
  if (!customers.length) return res.json({ error: "No Customer Found" });
  res.json({ message: "Success", customers });
};

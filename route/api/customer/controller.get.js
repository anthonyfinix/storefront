const Customer = require("./modal");
module.exports = async (req, res) => {
  let {
    name,
    contact_details,
    total_purchase,
    last_visit,
    active,
    created_by,
    created_at
  } = req.body;
  
  let customers = await Customer.find({});
  if (!customers.length) return res.json({ error: "No Customer Found" });
  res.json({ message: "Success", customers });
};

const Customer = require("./modal");

module.exports = async (req, res) => {
  let { customerId } = req.body;
  if (!customerId) req.json({ error: "Provide Customer ID" });
  try{
      let customer = await Customer.deleteOne({ _id: customerId });
      res.json({message:"Success",customer});
  }catch(e){
      res.json({error:e})
  }
  
};

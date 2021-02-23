const createProduct = require("./service.create");
module.exports = async (req, res) => {
  let { name } = req.body;
  res.json(await createProduct({ name }));
};

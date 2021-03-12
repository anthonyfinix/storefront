const createProductCategory = require("./createProductCategory");
const checkNameExist = require("./checkNameExist");
const updateProductCategory = require("./updateProductCategory");
const validation = require("../../../validation/joi.productCategory");
module.exports = async (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  if (!id) return res.json({ error: "id is required" });
  let params = { id };
  if (name) params.name = name;
  if (await checkNameExist(name))
    return res.json({ error: "Name already exists" });
  let { error, message, result } = updateProductCategory(params);
  if (error) return res.json({ error });
  return res.json({ message, result });
  //   }
};

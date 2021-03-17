const joi = require("joi");
const name = joi.string();
const created_at = joi.number();
exports.product_name = name;
exports.product_created_at = created_at;
module.exports = joi.object({
  name: name.required(),
});

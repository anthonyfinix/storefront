const joi = require("joi");
const name = joi.string();
const created_at = joi.number();
const _id = require("../validation/joi._id");
module.exports.joi_productCategory_id = _id;
module.exports.joi_productCategory_name = name;
module.exports.joi_productCategory_created_at = created_at;
module.exports.joi_productCategory = joi.object({
  name: name.required(),
});

const joi = require("joi");
const first_name = joi.string();
const middle_name = joi.string();
const last_name = joi.string();
const name = joi.object({
  first_name: joi.string().required(),
  middle_name: joi.string(),
  last_name: joi.string()
});

module.exports.name = joi.name = name;
exports.joi_first_name = first_name
exports.joi_middle_name = middle_name
exports.joi_last_name = last_name

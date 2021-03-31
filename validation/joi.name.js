const joi = require("joi");
const first_name = joi.string();
const middle_name = joi.string();
const last_name = joi.string();
const name = joi.object({
  first_name: joi.string(),
  middle_name: joi.string(),
  last_name: joi.string()
});

module.exports.name = joi.name = name;
exports.first_name = first_name
exports.middle_name = middle_name
exports.last_name = last_name

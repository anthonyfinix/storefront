const joi = require("joi");

const name = joi.object({
  first_name: joi.string(),
  middle_name: joi.string(),
  last_name: joi.string()
});

module.exports = joi.name = name;

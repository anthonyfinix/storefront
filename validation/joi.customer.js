const joi = require("joi");

module.exports = joi.object({
  name: {
    first_name: joi.string().required(),
    secondary_name: joi.string(),
    last_name: joi.string()
  },
  contact_details: {
    primary_number: joi.number().required(),
    secondary_number: joi.number(),
    mobile_number: joi.number(),
    email: joi.number().required(),
    address: {
      full: joi.string().required(),
      city: joi.string().required(),
      state: joi.string().required(),
      coordinates: joi.array().items(joi.number())
    }
  },
  last_visit: joi.number(),
  total_purchase: joi.number(),
  active: joi.bool()
});

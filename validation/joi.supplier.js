const joi = require("joi");

module.exports = joi.object({
  name: joi.object({
    first_name: joi.string(),
    middle_name: joi.string(),
    last_name: joi.string(),
    contact_details: {
      primary_number: joi.number().required(),
      secondary_number: joi.number(),
      mobile_number: joi.number(),
      email: joi
        .string()
        .email()
        .required(),
      address: joi.object({
        full: joi.string(),
        city: joi.string(),
        state: joi.string(),
        coordinates: joi.array().items(joi.number())
      })
    },
    active: joi.boolean(),
    created_by: joi.string(),
    created_on: joi.number(),
    total_purchase: joi.number()
  })
});

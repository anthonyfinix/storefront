const joi = require("joi");

module.exports = joi.object({
  name: joi.object({
    first_name: joi.string().required(),
    middle_name: joi.string(),
    last_name: joi.string().required()
  }),
  contact_details: joi
    .object({
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
    })
    .required(),
  active: joi.boolean(),
  created_by: joi.string(),
  created_on: joi.number(),
  total_purchase: joi.number()
});

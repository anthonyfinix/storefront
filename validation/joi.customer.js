const joi = require("joi");

module.exports = joi.object({
  name: joi
    .object({
      first_name: joi.string(),
      middle_name: joi.string(),
      last_name: joi.string()
    })
    .required(),
  store_visited: joi
    .array()
    .items({
      id: joi.string().required(),
      name: joi.string().required()
    })
    .required(),
  total_purchase: { amount: joi.number().required() },
  contact_details: joi
    .object({
      primary_number: joi.number().required(),
      secondary_number: joi.number(),
      mobile_number: joi.number(),
      email: joi
        .string()
        .email()
        .required(),
      address: joi
        .object({
          full: joi.string().required(),
          city: joi.string().required(),
          state: joi.string().required(),
          pincode: joi.number().required(),
          coordinates: joi.array().items(joi.number())
        })
        .required()
    })
    .required(),
  active: joi.boolean()
});

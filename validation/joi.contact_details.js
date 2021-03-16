const joi = require("joi");

const contact_details = joi.object({
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
});

module.exports = contact_details;

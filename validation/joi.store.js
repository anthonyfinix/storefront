const joi = require("joi");

module.exports = joi.object({
  name: joi.string().required(),
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
          coordinates: joi.array().items(joi.number()),
          pincode: joi.number().required()
        })
        .required()
    })
    .required(),
  active: joi.boolean(),
  roles: joi
    .array()
    .items(joi.string())
    .min(1)
    .required(),
  gmt: joi.string().required(),
  currency: joi.string()
});

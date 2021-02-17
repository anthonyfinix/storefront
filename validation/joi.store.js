const joi = require("joi");

module.exports = joi.object({
  name: joi.object({
    first_name: joi.string(),
    middle_name: joi.string(),
    last_name: joi.string()
  }),
  username: joi.string().required(),
  password: joi.string().required(),
  contact_details: joi.object({
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
  }),
  active:joi.boolean(),
  role: joi.string(),
  assigned_store: joi.object({ id: joi.string(), name: joi.string() }),
  documents: joi
    .array()
    .items(
      joi.object({
        name: String,
        path: String
      })
    )
    .allow("")
});

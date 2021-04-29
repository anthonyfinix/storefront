const joi = require("joi");
const primary_number = joi.number().required();
const secondary_number = joi.number();
const mobile_number = joi.number();
const email = joi.string().email().required();
const full = joi.string().required();
const city = joi.string().required();
const state = joi.string().required();
const pincode = joi.number().required();
const coordinates = joi.array().items(joi.number());
const address = joi
  .object({ full, city, state, pincode, coordinates })
  .required();

exports.joi_primary_number = primary_number;
exports.joi_secondary_number = secondary_number;
exports.joi_mobile_number = mobile_number;
exports.joi_email = email;
exports.joi_address_full = full;
exports.joi_address_city = city;
exports.joi_address_state = state;
exports.joi_address_pincode = pincode;
exports.joi_address_coordinates = coordinates;
exports.joi_address = address;
exports.joi_contact_details = joi.object({
  primary_number,
  secondary_number,
  mobile_number,
  email,
  address,
}); 


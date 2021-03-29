const joi = require('joi');
const joi_id = joi.string().alphanum().min(5);
module.exports = joi_id
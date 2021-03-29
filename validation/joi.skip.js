const joi = require('joi');

const skip = joi.number().min(0);
module.exports = skip 
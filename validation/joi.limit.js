const joi = require("joi");

const limit = joi.number().min(0);
module.exports = limit;

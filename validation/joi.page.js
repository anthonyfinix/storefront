const joi = require("joi");

const page = joi.number().min(0);
module.exports = page;

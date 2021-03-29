const joi = require("joi");

const query = joi.number().min(0);
module.exports = query;

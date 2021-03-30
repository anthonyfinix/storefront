const joi = require("joi");

const query = joi.string().min(0);
module.exports = query;

const joi = require("joi");

const page = joi.number().min(1).integer();
module.exports = page;

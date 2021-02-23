const validation = require("../../../validation/joi.user");
const nameExists = require('./checkNameExist');
const usernameExists = require('./checkUsernameExist');
module.exports = (req, res) => {
  let {
    name,
    username,
    password,
    contact_details,
    active,
    employeeId,
    role
  } = req.body;

  let = { error } = validation.validate({
    name,
    username,
    password,
    contact_details,
    active,
    employeeId,
    role
  });
  if (error) return res.json({ error: error.details });
  if(nameExists.exist) return res.json({ error: "name already exist" });
  if(usernameExists.exist) return res.json({ error: "name already exist" });
  
};

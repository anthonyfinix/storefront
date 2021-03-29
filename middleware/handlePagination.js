const joi_skip = require("../validation/joi.skip");
const joi_page = require("../validation/joi.page");
const joi_limit = require("../validation/joi.limit");

module.exports = (req, res, next) => {
  let { page, limit, skip } = req.query;
  // validate page
  if (page) {
    let joi_page_validation = joi_page.validate(page);
    if (joi_page_validation.error)
      return res.json({ error: joi_page_validation.error });
    req.query.page = parseInt(page);
  } else {
    page = 1;
  }
  // validate limit
  if (limit) {
    let joi_limit_validation = joi_limit.validate(limit);
    if (joi_limit_validation.error)
      return res.json({ error: joi_limit_validation.error });
    req.query.limit = parseInt(limit);
  } else {
    limit = 5;
  }
  // validate skip
  if (skip) {
    let joi_skip_validation = joi_skip.validate(skip);
    if (joi_skip_validation.error)
      return res.json({ error: joi_skip_validation.error });
    req.query.skip = parseInt(skip);
  } else {
    req.query.skip = (page - 1) * limit;
  }
  next();
};

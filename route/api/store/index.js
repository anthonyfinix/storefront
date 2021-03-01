const router = require('express').Router();
const create = require('./controller.create');
const get = require('./controller.get');

router.get('/',get);
router.post('/',create);
module.exports = router;
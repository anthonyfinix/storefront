const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Product Category')
})

module.exports = router;
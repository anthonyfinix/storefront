const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Customer')
})

module.exports = router;
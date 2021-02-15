const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Store')
})

module.exports = router;
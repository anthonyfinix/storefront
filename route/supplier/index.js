const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Supplier')
})

module.exports = router;
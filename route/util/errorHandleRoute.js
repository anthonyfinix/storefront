module.exports = (error, req, res, next)=>{
    console.log(error)
    res.status(res.statusCode || 500);
    res.json({
        error: error.message
    })
}
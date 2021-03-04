const Store = require('./modal');
module.exports = async (name)=>{
    let count = await Store.countDocuments({name});
    return count;
}
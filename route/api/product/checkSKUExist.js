const Store = require('./modal');
module.exports = async (sku)=>{
    let count = await Store.countDocuments({sku});
    return count;
}
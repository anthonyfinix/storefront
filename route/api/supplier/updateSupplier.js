const Product = require("./modal");
module.exports = async ({ name, company_name, active, total_purchase }) => {
  let message = "updated ";
  try {
    let product = await Product.findOne({ _id: id });
    if (!product) return { error: "No Product Found" };

    if (name) {
      message + "name ";
      product.name = name;
    }
    if(company_name){
        message + "company name ";
        product.company_name = company_name;
    }
    if(active){
        message + "active ";
        product.total_purchase = total_purchase;
    }
    try {
      let updatedProduct = await product.save();
      return { result: updatedProduct, message };
    } catch (e) {
      return { error: e.message };
    }
  } catch (e) {
    return { error: e.message };
  }
};

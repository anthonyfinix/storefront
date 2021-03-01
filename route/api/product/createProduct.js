const Product = require('./modal');
module.exports = ({
  name,
  sku,
  media,
  category,
  dimension,
  manufacturer,
  brand,
  sale_price,
  current_price,
  buying_price,
  stores,
  supplier,
  created_at,
  created_by
}) => {
    try {
    let newProduct = await Product({
        name,
        sku,
        media,
        category,
        dimension,
        manufacturer,
        brand,
        sale_price,
        current_price,
        buying_price,
        stores,
        supplier,
        created_at,
        created_by
    }).save();
    return res.json({ message: "Success", response:newProduct });
    } catch (e) {
    let { errors } = e;
    return res.json({ errors });
    }
};

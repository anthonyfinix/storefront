module.exports = ({ entity, fields }) => {
  if (typeof fields != "array" && typeof fields === "string") {
    fields = fields.split(",");
  }
  return entity.map((product) => {
    let filteredProduct = {};
    for (let i = 0; i <= fields.length; i++) {
      if (product[fields[i]]) {
        filteredProduct._id = product._id;
        filteredProduct[fields[i]] = product[fields[i]];
      }
    }
    return filteredProduct;
  });
};

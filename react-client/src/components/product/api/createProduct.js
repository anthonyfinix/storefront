import axios from "../../../axios";

export default async ({
  name,
  sku,
  category,
  dimension,
  suppliers,
  stores,
  manufacturer,
  brand,
  sale_price,
  current_price,
  buying_price
}) => {
  return await axios
    .post("api/product", {
      name,
      sku,
      category,
      dimension,
      suppliers,
      stores,
      manufacturer,
      brand,
      sale_price,
      current_price,
      buying_price
    })
    .then(response => {
      let { error, product } = response.data;
      if (error) return error;
      return product;
    })
    .catch(e => {
      return { error: e.message };
    });
};

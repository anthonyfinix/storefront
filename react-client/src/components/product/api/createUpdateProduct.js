import axios from "../../../axios";

export default async ({
  id,
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
  buying_price,
}) => {
  let data = {
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
    buying_price,
  };
  if (id) data.id = id;
  return await axios
    .post("api/product", data)
    .then((response) => {
      let { error, result } = response.data;
      if (error) return { error };
      return { result };
    })
    .catch((e) => {
      return { error: e.message };
    });
};

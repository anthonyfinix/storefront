import axios from "../../../axios";

export default async ({ id, customer, store, product, amount }) => {
  let data = {};
  if (id) data.id = id;
  return await axios
    .post("api/purchase", data)
    .then((response) => {
      let { error, result, message, count } = response.data;
      if (error) return { error };
      return { result, message, count };
    })
    .catch((e) => {
      return { error: e.message };
    });
};

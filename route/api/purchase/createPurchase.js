const Purchase = require("./modal");
module.exports = async ({
  store,
  customer,
  amount,
  product,
  active,
  created_at,
  created_by
}) => {
  try {
    let response = await Purchase({
      store,
      customer,
      amount,
      product,
      active,
      created_at,
      created_by
    }).save();
    return { message: "success", result: response };
  } catch (e) {
    return e;
  }
};

import axios from "../../../axios";

export default async ({ page, query }) => {
  let params = {};
  if (page) params.page = page;
  if (query) params.query = query;
  return await axios.get("api/productCategory", {
    params,
  });
};

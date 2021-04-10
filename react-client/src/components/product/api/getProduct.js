import axios from "../../../axios";

export default async ({ page,query }) => {
  let params = {};
  if (page) params.query = query;
  if (page) params.page = page;
  return await axios.get("api/product", { params });
};

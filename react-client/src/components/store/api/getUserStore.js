import axios from "../../../axios";
export default async ({ page, query } = {}) => {
  let params = {};
  if (query) params.query = query;
  if (page) params.page = page;
  return await axios.get("api/store", { params });
};

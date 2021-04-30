import axios from "../../../axios";

export default async ({ page, query, limit, skip }) => {
  let params = {};
  if (page) params.page = page;
  if (query) params.query = query;
  if (limit) params.limit = limit;
  if (skip) params.skip = skip;
  try {
    let response = await axios.get("api/product", { params });
    if (response.status && response.status === 200) {
      let { result, error } = response.data;
      if (error) return {error};
      return { result };
    }
  } catch (e) {
    return { error: e.message };
  }
};

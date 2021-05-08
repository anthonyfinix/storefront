import axios, { cancelToken } from "../../../axios";

export default async ({ page, query, limit, skip, cancelToken }) => {
  let options = {
    params:{}
  };
  if (page) options.params.page = page;
  if (query && query != "") options.params.query = query;
  if (limit) options.params.limit = limit;
  if (skip) options.params.skip = skip;
  if (cancelToken) options.cancelToken = cancelToken;
  try {
    let response = await axios.get("api/product", options);
    if (response.status && response.status === 200) {
      let { result, error } = response.data;
      if (error) return { error };
      return { result };
    }
  } catch (e) {
    return { error: e.message };
  }
};

import axios from "../../../axios";

export default async ({ page, query }) => {
  let options = {
    params:{}
  };
  if (page) options.params.page = page;
  if (query) options.params.query = query;
  try {
    let response = await axios.get("api/customer", options);
    if (response.status && response.status === 200) {
      let { result, error } = response.data;
      if (error) return { error };
      return { result };
    }
  } catch (e) {
    return { error: e.message };
  }
};

import axios from "../../../axios";

export default ({ name }) => {
  return axios.post("api/productCategory", { name })
    .then(response => {
      let { error, result } = response.data;
      if (error) return error;
      return result;
    })
    .catch(e => ({ error: e.message }));
};

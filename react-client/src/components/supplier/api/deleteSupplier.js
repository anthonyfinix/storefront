import axios from "../../../axios";

export default ({ id }) => {
  return axios
    .delete(`api/supplier?id=${id}`)
    .then((response) => {
      let { error, result } = response.data;
      if (error) return { error };
      return { result };
    })
    .catch((e) => ({ error: e.message }));
};

import axios from "../../../axios";

export default ({ id, company_name, name, contact_details }) => {
  let data = {
    company_name,
    name,
    contact_details,
  };
  if (id) data.id = id;
  return axios
    .post("api/supplier", data)
    .then((response) => {
      let { error, result } = response.data;
      if (error) return { error };
      return { result };
    })
    .catch((e) => ({ error: e.message }));
};

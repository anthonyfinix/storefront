import axios from "../../../axios";

export default ({ company_name, name, contact_details }) => {
  return axios
    .post("api/supplier", {
      company_name,
      name,
      contact_details,
    })
    .then((response) => {
      let { error, result } = response.data;
      if (error) return error;
      return { result };
    })
    .catch((e) => ({ error: e.message }));
};

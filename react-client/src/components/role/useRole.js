import React, { useEffect } from "react";
import getRole from "./api/getRole";

const useRole = () => {
  const [roles, setRoles] = React.useState([]);

  const get = async () => {
    let response = await getRole();
    if (response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => setRoles(results));
  }, []);

  return roles;
};

export default useRole;

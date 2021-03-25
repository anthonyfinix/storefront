import React, { useEffect } from "react";
import getCustomer from "./api/getCustomer";

const useCustomer = () => {
  const [customer, setCustomer] = React.useState([]);

  const get = async () => {
    let response = await getCustomer();
    if (response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => setCustomer(results));
  }, []);

  return customer;
};

export default useCustomer;

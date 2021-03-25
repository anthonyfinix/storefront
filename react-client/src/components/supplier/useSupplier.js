import React, { useEffect } from "react";
import getSupplier from "./api/getSupplier";

const useSupplier = () => {
  const [suppliers, setSupplier] = React.useState([]);

  const get = async () => {
    let response = await getSupplier();
    if (response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => setSupplier(results));
  },[]);

  return suppliers;
};

export default useSupplier;

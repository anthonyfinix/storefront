import React, { useEffect } from "react";
import getSupplier from "./api/getSupplier";

const useSupplier = () => {
  const [suppliers, setSupplier] = React.useState([]);

  const get = async () => {
    let response = await getSupplier();
    if (response.status === 200) {
      let { message, results, error } = response.data;
      if (error) return error;
      return results;
    }
  };

  useEffect(() => {
    get().then(results => setSupplier(results));
  },[]);

  return suppliers;
};

export default useSupplier;

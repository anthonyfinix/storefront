import React, { useEffect } from "react";
import getSupplier from "./api/getSupplier";

const useSupplier = () => {
  const [suppliers, setSupplier] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const addPage = () => setPageNo(pageNo + 1);
  const refresh = () => {
    console.log('refreshing list');
    get().then(results => {
      return setSupplier(suppliers => {
        return [...suppliers, ...results];
      });
    });
  };
  const get = async () => {
    let response = await getSupplier({ page: pageNo });
    if (response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => {
      setSupplier(suppliers => {
        return [...suppliers, ...results];
      });
    });
  }, [pageNo]);

  return {
    suppliers,
    supplierNextPage: addPage,
    refreshSupplier: refresh
  };
};

export default useSupplier;

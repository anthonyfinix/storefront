import React, { useEffect } from "react";
import getCustomer from "./api/getCustomer";

const useCustomer = () => {
  const [customer, setCustomer] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const addPage = () => setPageNo(pageNo + 1);

  const get = async () => {
    let response = await getCustomer({page:pageNo});
    if (response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => setCustomer(customers => {
      return [...customers, ...results];
    }));
  }, []);

  return {
    customer,
    customerNextPage:addPage
  };
};

export default useCustomer;

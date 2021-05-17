import React, { useEffect } from "react";
import getCustomer from "./api/getCustomer";

const useCustomer = () => {
  const [customers, setCustomers] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const addPage = () => setPageNo(pageNo + 1);

  const get = async () => {
    let response = await getCustomer({ page: pageNo });
    let { message, result, error } = response;
    if (error) return error;
    return result;
  };

  useEffect(() => {
    get().then((results) =>
      setCustomers((customers) => {
        return [...customers, ...results];
      })
    );
  }, []);

  return {
    customers,
    customerNextPage: addPage,
  };
};

export default useCustomer;

import React, { useEffect } from "react";
import getRole from "./api/getRole";

const useRole = () => {
  const [roles, setRoles] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const addPage = () => setPageNo(pageNo + 1);

  const get = async () => {
    let response = await getRole({ page: pageNo });
    if (response.status && response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => {
      setRoles(products => {
        return [...products, ...results];
      });
    });
  }, [pageNo]);

  return {
    roles,
    roleNextPage:addPage
  };
};

export default useRole;

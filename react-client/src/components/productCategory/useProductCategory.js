import React, { useEffect } from "react";
import getProductCategory from "./api/getProductCategory";

const useProductCategory = () => {
  const [productCategory, setProductCategory] = React.useState([]);

  const get = async () => {
    let response = await getProductCategory();
    if (response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(result => {
      setProductCategory(result);
    });
  }, []);

  return productCategory;
};

export default useProductCategory;

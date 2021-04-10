import React, { useEffect } from "react";
import getProductCategory from "./api/getProductCategory";

const useProductCategory = () => {
  const [productCategories, setProductCategories] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const addPage = () => setPageNo(pageNo + 1);
  const setLatestProductCategory = () => {
    get().then(results => {
      setProductCategories(productCategories => [
        ...productCategories,
        ...results
      ]);
    });
  };
  const get = async () => {
    let response = await getProductCategory({ page: pageNo });
    if (!!response && response.status === 200) {
      let { message, result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => {
      setProductCategories(productCategories => {
        return [...productCategories, ...results];
      });
    });
  }, [pageNo]);

  return {
    productCategories,
    productCategoriesNextPage: addPage,
    refresh: setLatestProductCategory
  };
};

export default useProductCategory;

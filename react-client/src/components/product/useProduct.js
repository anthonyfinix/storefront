import React, { useEffect } from "react";
import getProduct from "./api/getProduct";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const addPage = () => setPageNo(pageNo + 1);
  const get = async () => {
    let response = await getProduct({ page: pageNo });
    if (response.status && response.status === 200) {
      let { result, error } = response.data;
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => setProducts(products => [...products, ...results]));
  }, [pageNo]);

  return {
    products,
    productNextPage: addPage
  };
};

export default useProduct;

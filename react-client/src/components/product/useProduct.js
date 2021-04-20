import React, { useEffect } from "react";
import getProduct from "./api/getProduct";
import deleteProduct from "./api/deleteSupplier";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const addPage = () => setPageNo(pageNo + 1);
  const deleteAndGetLatestProduct = async (id) => {
    let response = await deleteProduct(id);
    if (response.status && response.status === 200) {
      let { result, error } = response.data;
      if (error) return error;
      refresh();
      return result;
    }
  };
  const refresh = () => {
    get().then((response) => {
      console.log(response);
      let { result } = response;
      if (result) setProducts([...result]);
    });
  };
  const get = async () => {
    let response = await getProduct({ page: pageNo });
    if (response.status && response.status === 200) {
      let { result, error } = response.data;
      if (error) return error;
      return { result };
    }
  };

  useEffect(() => {
    get().then((response) => {
      let { result } = response;
      setProducts((products) => [...products, ...result]);
    });
  }, [pageNo]);

  return {
    products,
    productNextPage: addPage,
    productRefresh: refresh,
    deleteProduct: deleteAndGetLatestProduct,
  };
};

export default useProduct;

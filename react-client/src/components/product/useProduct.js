import React, { useEffect } from "react";
import getProduct from "./api/getProduct";
import deleteProduct from "./api/deleteSupplier";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const [limit, setLimit] = React.useState(5);
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
    getProduct({ skip: 0, limit: pageNo * 5 }).then((response) => {
      let { result } = response;
      if (result) setProducts([...result]);
    });
  };

  useEffect(() => {
    getProduct({ page: pageNo }).then((response) => {
      let { result, error } = response;
      if (error) console.log(error);
      setProducts((products) => [...products, ...result]);
    });
    return ()=>{console.log('unmounted')}
  }, [pageNo]);

  return {
    products,
    productNextPage: addPage,
    productRefresh: refresh,
    deleteProduct: deleteAndGetLatestProduct,
  };
};

export default useProduct;

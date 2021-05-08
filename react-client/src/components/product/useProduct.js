import React, { useEffect } from "react";
import getProduct from "./api/getProduct";
import deleteProduct from "./api/deleteSupplier";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const [limit, setLimit] = React.useState(5);
  const [query, setQuery] = React.useState("");
  const isSearching = React.useRef(false);
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
  const setSearchQuery = (searchTerm) => {
    setQuery((query) => {
      if (query != "") setPageNo(1);
      isSearching.current = true;
      return searchTerm;
    });
  };
  const refresh = () => {
    getProduct({ skip: 0, limit: pageNo * 5 }).then((response) => {
      let { result } = response;
      if (result) setProducts([...result]);
    });
  };

  useEffect(() => {
    getProduct({ page: pageNo, query }).then((response) => {
      let { result, error } = response;
      if (error) console.log(error);
      if (query) {
        setProducts([...result]);
        isSearching.current = false;
      } else {
        setProducts((products) => [...products, ...result]);
        isSearching.current = false;
      }
    });
  }, [pageNo, query]);

  return {
    products,
    productNextPage: addPage,
    productRefresh: refresh,
    deleteProduct: deleteAndGetLatestProduct,
    searchProduct: setSearchQuery,
  };
};

export default useProduct;

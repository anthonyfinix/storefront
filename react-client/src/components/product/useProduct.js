import React, { useEffect } from "react";
import getProduct from "./api/getProduct";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);

  const get = async () => {
    let response = await getProduct();
    if (response.status === 200) {
      let { message, results, error } = response.data;
      if (error) return error;
      return results;
    }
  };

  useEffect(() => {
    get().then(results => setProducts(results));
  },[]);

  return products;
};

export default useProduct;

import React, { useEffect } from "react";
import getProduct from "./api/getProduct";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);

  const get = async () => {
    let response = await getProduct();
    if (response.status === 200) {
      let { message, result, error } = response.data;
      console.log(response.data)
      if (error) return error;
      return result;
    }
  };

  useEffect(() => {
    get().then(results => setProducts(results));
  }, []);

  return products;
};

export default useProduct;

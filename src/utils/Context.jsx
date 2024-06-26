import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  // const getproducts = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     // console.log("Response Data:", data);
  //     setproducts(data);
  //   } catch (error) {
  //     console.log("Error fetching products:", error);
  //   }
  // };

  // useEffect(() => {
  //   getproducts();
  // }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;

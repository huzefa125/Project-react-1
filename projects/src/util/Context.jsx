import axios from './axios';
import React, { useEffect, useState, createContext } from 'react';

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios("/products");
      const safeData = Array.isArray(data) ? data : [data];
      console.log("Fetched Data:", safeData);
      setproduct(safeData);
    } catch (error) {
      console.error("Error fetching products:", error);
      setproduct([]);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={[product, setproduct]}>
      {props.children}
    </ProductContext.Provider>
  );
}

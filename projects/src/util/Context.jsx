import axios from './axios';

import React, { useEffect, useState, createContext } from 'react';
import { ProductProvider } from './util/Context.jsx'

export const ProductContext = createContext();

function Context(props) {
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios ("/products"); // Use correct endpoint and instance
      console.log(data);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(product);
  
  return (
    <ProductContext.Provider value={[product, setproduct]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
import React, { createContext} from "react";
import {  useState,useEffect} from "react";
import data from "../Json/shop.data";
export const CartContext = createContext();


const Cart = ({ children }) => {
  const [products] = useState(data);
  const [product, setProduct] = useState({});
  const [selectedItems,setSelectedItems] =useState(JSON.parse(localStorage.getItem("selectedItems")));

  return (
    <>
      <CartContext.Provider
        value={{
          products,
          product,
          setProduct,
          setSelectedItems,
          selectedItems
          

        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Cart;

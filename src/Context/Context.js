import React, { createContext} from "react";
import {  useState} from "react";
import data from "../Json/shop.data";
export const CartContext = createContext();


const Cart = ({ children }) => {
  const [products] = useState(data);
  // const [selectedItems, setSelectedItems] = useState([]);
  const [product, setProduct] = useState({});
  // let selectedItemsFromLocalStorage = JSON.parse(localStorage.getItem("selectedItems"),"[]")

  return (
    <>
      <CartContext.Provider
        value={{
          products,
          
          product,
          setProduct,
          
          
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Cart;

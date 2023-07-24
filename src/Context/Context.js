import React, { createContext, useContext } from "react";
import {  useState } from "react";
import data from "../Json/shop.data";

export const CartContext = createContext();

const Cart = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);
  const [product, setProduct] = useState({});

  const addCart = (packageTitle, categoryName) => {
    let category = products.find((x) => x.title === categoryName);
    let categoryView = category.items.find((y) => y.name === packageTitle);
    let cartList = [...selectedItems];
    cartList.push(categoryView);
    setSelectedItems(cartList);
  };


  return (
    <>
      <CartContext.Provider
        value={{
          products,
          addCart,
          selectedItems,
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

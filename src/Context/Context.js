import React, { createContext} from "react";
import {  useState,useEffect } from "react";
import data from "../Json/shop.data";
export const CartContext = createContext();


const Cart = ({ children }) => {
  const [products] = useState(data);
  // const [selectedItems, setSelectedItems] = useState([]);
  const [product, setProduct] = useState({});
  // let selectedItemsFromLocalStorage = JSON.parse(localStorage.getItem("selectedItems"),"[]")

  const addCart = (packageTitle, categoryName) => {
    let category = products.find((x) => x.title === categoryName);
    let categoryView = category.items.find((y) => y.name === packageTitle);
    let cartList=[];
    if(JSON.parse(localStorage.getItem("selectedItems"),"[]")){
      cartList = JSON.parse(localStorage.getItem("selectedItems"),"[]");
    }
    else{
      cartList = [];
    }
    cartList.push(categoryView)
    // setSelectedItems(cartList);
    localStorage.setItem("selectedItems",JSON.stringify(cartList));
  };

    
   
  


  return (
    <>
      <CartContext.Provider
        value={{
          products,
          addCart,
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

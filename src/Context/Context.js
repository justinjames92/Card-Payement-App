import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import data from "../Json/shop.data";

export const CartContext = createContext();

const Cart = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);

  const addCart = (packageTitle, categoryName) => {
    let category = products.find((x) => x.title === categoryName);
    let categoryView = category.items.find((y) => y.name === packageTitle);

    let cartList = [...selectedItems];
    cartList.push(categoryView);
    setSelectedItems(cartList);
  };

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/search?q=phone")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products));
  //   // axios.get("https://dummyjson.com/products/search?q=phone")
  //   //   .then((response) => setData(response.data.products))
  //   //   .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <CartContext.Provider value={{ products, addCart, selectedItems }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Cart;

// s="2";
// a=["name"="1","name"="2","name"="3"];

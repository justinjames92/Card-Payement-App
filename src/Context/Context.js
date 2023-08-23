import React, { createContext, useState } from "react";
import data from "../Json/shop.data";
export const CartContext = createContext();


const Cart = ({ children }) => {
  const selectedItem = JSON.parse(localStorage.getItem("selectedItems"))
  const favoriteItem = JSON.parse(localStorage.getItem("favoriteItems"))

  const [products] = useState(data);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState(selectedItem || []);
  const [favoriteProducts, setFavoriteProducts] = useState([favoriteItem]);
  return (
    <>
      <CartContext.Provider
        value={{
          products,
          product,
          setProduct,


          favoriteProducts,
          setFavoriteProducts,
          cart, setCart


        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Cart;

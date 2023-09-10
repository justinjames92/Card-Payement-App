import React, { createContext, useState } from "react";
import data from "../Json/shop.data";
export const CartContext = createContext();


const Cart = ({ children }) => {
  const selectedItem = JSON.parse(localStorage.getItem("selectedItems"))
  const favoriteItem = JSON.parse(localStorage.getItem("favoriteItems"))

  const [products] = useState(data); //Json data
  const [product, setProduct] = useState({}); // selected product from the entire products
  const [cart, setCart] = useState(selectedItem || []); // data in cartPage
  const [favoriteProducts, setFavoriteProducts] = useState(favoriteItem||[]); // data for favoritesPage
  return (
    <>
      <CartContext.Provider
        value={{
          products,
          product,
          setProduct,


          favoriteProducts,
          setFavoriteProducts,
          cart, 
          setCart


        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Cart;

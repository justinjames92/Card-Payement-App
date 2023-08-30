import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import ProductTiles from "./ProductTiles";
import { CartContext } from "../../Context/Context";
// import { SHOP_DATA } from "../../Json/shop.data";

const mockData = [{ id: 1, items: [], routeName: "hats", title: "Hats" }];

test("If component render", () => {
  render(
    <CartContext.Provider value={{mockData}}> 
      <ProductTiles />
    // </CartContext.Provider>
  );

  expect(screen.getByText("Shop Now")).toBeTruthy();
});

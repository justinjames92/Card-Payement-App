import * as React from "react";
import MenuList from "./MenuList";
import Cart from "../../Context/Context";
import ProductTiles from "./ProductTiles";

/*This component is the parent component for all the children in Home Page */

const Main = () => {
  return (
    <Cart>
      <MenuList />
      <ProductTiles />
    </Cart>
  );
};

export default Main;

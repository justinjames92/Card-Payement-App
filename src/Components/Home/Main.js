// @flow strict

import * as React from "react";
import MenuList from "./MenuList";
import Banner from "./Banner";
import Cart from "../../Context/Context";
import ProductTiles from "./ProductTiles";

const Main = () => {
  return (
    <Cart>
      <MenuList />
      {/* <Banner /> */}

      <ProductTiles />

    </Cart>
  );
};

export default Main;

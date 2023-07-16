// @flow strict

import * as React from "react";
import MenuList from "./MenuList";
import Banner from "./Banner";
import PackageListing from "./PackageListing";
import Cart from "../../Context/Context";

const Main = () => {
  return (
    <Cart>
      <MenuList />
      <Banner />
      <PackageListing />
    </Cart>
  );
};

export default Main;

// @flow strict

import * as React from "react";
import MenuList from "./MenuList";
import Banner from "./Banner";
import PackageListing from "./PackageListing";
const Main = () => {
  const test = () => {
    console.log("Hello Main");
  };
  return (
    <>
      <MenuList />
      <Banner />

      <PackageListing />
    </>
  );
};

export default Main;

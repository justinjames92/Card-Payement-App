import React from "react";
import MenuList from "../Home/MenuList";
import ItemsListing from "./ItemsListing";
/* This component is the parent component in the itemsPage*/ 
function Items() {
  return (
    <div>
      <MenuList />
      <ItemsListing />
    </div>
  );
}

export default Items;

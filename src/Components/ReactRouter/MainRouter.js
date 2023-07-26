import React from "react";
import Home from "../../Pages/Home";
import Items from "../../Pages/Items";
import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";


const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:title" element={<Items />}
         />
         <Route path="/Carts" element={<Cart />}/>
      </Routes>
    </div>
  );
};

export default MainRouter;

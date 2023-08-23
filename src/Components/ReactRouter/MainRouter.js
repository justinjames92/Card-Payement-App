import React from "react";
import Home from "../../Pages/Home";
import Items from "../../Pages/Items";
import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";
import Favorite from "../../Pages/Favorite";


const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:title" element={<Items />}
         />
         <Route path="/Carts" element={<Cart />}/>
         <Route path="/Favorite" element={<Favorite />}/>
      </Routes>
    </div>
  );
};

export default MainRouter;

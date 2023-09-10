import React from "react";
import Home from "../../Pages/Home";
import Items from "../../Pages/Items";
import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";
import Favorite from "../../Pages/Favorite";
import Success from "../../Pages/Success";
import PaymentError from "../../Pages/PaymentError";
/*This component is used to manage the routings to different page */
const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:title" element={<Items />} />
        <Route path="/Carts" element={<Cart />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/PaymentError" element={<PaymentError />} />


        
      </Routes>
    </div>
  );
};

export default MainRouter;

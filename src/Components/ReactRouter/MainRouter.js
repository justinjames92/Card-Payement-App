import React from "react";
import Home from "../../Pages/Home";
import Items from "../../Pages/Items";
import { Route, Routes } from "react-router-dom";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:title" element={<Items />} />
      </Routes>
    </div>
  );
};

export default MainRouter;

import React from "react";
import Home from "../../Pages/Home";
import Items from "../../Pages/Items";
import { Route } from "react-router-dom";

const MainRouter = () => {
  return (
    <div>
      <Home />
      <Items />
    </div>
  );
};

export default MainRouter;

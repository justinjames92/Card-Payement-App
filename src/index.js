import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Pages/Home.js";
import Context from "./Context/Context";
import Items from "../src/Pages/Items";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Home />
        <Items />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Context from "./Context/Context";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Components/ReactRouter/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <MainRouter />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RouterDef from "./RouterDef";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterDef />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

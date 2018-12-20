import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Route from "./route";

ReactDOM.render(
  <HashRouter>
    <Route />
  </HashRouter>,
  document.getElementById("root")
);

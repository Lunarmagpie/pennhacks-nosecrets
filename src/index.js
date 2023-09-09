import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menubar from "./components/menubar";
import Main from "./components/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menubar />
    <Main />
  </React.StrictMode>
);

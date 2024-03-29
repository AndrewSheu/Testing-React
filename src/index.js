import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BackStage from "./Components/backStage";
import Menu from "./Components/Menu";
import Form from "./Components/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Menu></Menu>

    <Form></Form>

    <BackStage></BackStage>
  </React.StrictMode>
);
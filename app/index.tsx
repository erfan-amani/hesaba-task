import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./main";
import "./style.css";
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Cannot find root element!");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

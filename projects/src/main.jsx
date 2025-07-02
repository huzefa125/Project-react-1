import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Context from "./util/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);

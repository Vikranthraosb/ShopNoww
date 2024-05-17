import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./utils/Context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    {/* wrapped everything with context explicitly, so we can share common api data */}
    <BrowserRouter>
      {/* added react router from react router dom and wrapped "APP" with it */}
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Context>
);

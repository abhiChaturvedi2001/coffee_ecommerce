import React from "react";
import ReactDOM from "react-dom/client";
import App, { appRouter } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Utils/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

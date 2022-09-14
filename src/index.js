import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "flowbite";
import "tw-elements";
import "../node_modules/font-awesome/css/font-awesome.min.css";
  import { BrowserRouter } from "react-router-dom";
  import { Provider } from "react-redux";
  import { store } from "./redux/store";
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
 
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../src/redux/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <AuthProvider>
        <Provider store={store}>
          <App />   
          <Toaster/>  
        </Provider>
        </AuthProvider>
    </BrowserRouter>
);
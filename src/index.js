import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
        , rootElement);

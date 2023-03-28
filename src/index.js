import React from "react"
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import "./styles/index.css"

import App from "./components/App";

import {Provider} from "react-redux";
import {store} from "./features/stote";



createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

);
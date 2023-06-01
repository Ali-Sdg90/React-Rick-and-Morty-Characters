import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import App2 from "./App2";
import "./index.css";
import axios from "axios";

axios.interceptors.request.use(
    (request) => {
        console.log(`A "${request.method}" request sent to ${request.url}`);
        return request;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log(`A response has been received from ${response.config.url}`);
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

ReactDOM.render(
    <BrowserRouter>
        <App2 />
    </BrowserRouter>,
    document.getElementById("root")
);

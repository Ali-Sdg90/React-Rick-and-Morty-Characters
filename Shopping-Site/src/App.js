import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Store from "./components/Store";

import ProductContextProvider from "./context/ProductContextProvider";

const App = () => {
    const location = useLocation();

    return (
        <ProductContextProvider>
            <Store />
        </ProductContextProvider>
    );
};

export default App;

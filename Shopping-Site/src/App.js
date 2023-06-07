import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

const App = () => {
    const location = useLocation();

    return (
        <div>
            <h1>App</h1>
        </div>
    );
};

export default App;

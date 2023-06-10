import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Locations from "./components/Location";
import PageNotFound from "./components/PageNotFound";

const App = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "Rick and Morty Characters";
        // console.log("URL changed:", location.pathname);
    }, [location.pathname]);

    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/React-Rick-and-Morty-Characters"
                    element={<Main />}
                />
                <Route
                    path="/React-Rick-and-Morty-Characters/search/:id"
                    element={<Main />}
                />
                <Route
                    path="/React-Rick-and-Morty-Characters/location/:id"
                    element={<Locations />}
                />
                <Route
                    path="/React-Rick-and-Morty-Characters/location/0"
                    element={<Navigate to="/notfound" />}
                />
                <Route
                    path="/React-Rick-and-Morty-Characters/*"
                    element={<Navigate to="/notfound" />}
                />
                <Route
                    path="/React-Rick-and-Morty-Characters/notfound"
                    element={<PageNotFound />}
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;

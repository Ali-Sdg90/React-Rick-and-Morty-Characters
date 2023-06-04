import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Locations from "./components/Locations";

const App = () => {
    useEffect(() => {
        document.title = "Rick and Morty Characters";
    });

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/location/:id" element={<Locations />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;

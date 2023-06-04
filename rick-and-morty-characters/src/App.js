import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Locations from "./components/Location";

const App = () => {
    useEffect(() => {
        document.title = "Rick and Morty Characters";
    });

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/search/:id" element={<Main />} />
                <Route path="/location/:id" element={<Locations />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;

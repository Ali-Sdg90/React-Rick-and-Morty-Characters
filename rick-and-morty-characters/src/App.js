import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Locations from "./components/Location";
import PageNotFound from "./components/PageNotFound";

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
                <Route path="/location/0" element={<Navigate to="/notfound" />}/>
                {/* <Route path={} element={<Navigate to="/notfound" />}/> */}
                <Route path="/*" element={<Navigate to="/notfound" />}/>
                <Route path="/notfound" element={<PageNotFound />}/>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;

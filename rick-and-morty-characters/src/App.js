import React, { useEffect } from "react";

import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
    useEffect(() => {
        document.title = "Rick and Morty Characters";
    });

    return (
        <div >
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;

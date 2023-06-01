import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {

    useEffect(()=>{
        document.title = "Rick and Morty Family"
    })

    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

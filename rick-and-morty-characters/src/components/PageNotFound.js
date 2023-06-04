import React from "react";
import { Link } from "react-router-dom";
import Styles from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <div className={Styles.container}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/">HomePage</Link>
        </div>
    );
};

export default PageNotFound;

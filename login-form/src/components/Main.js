import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

import Styles from "./Main.module.css";

const Main = () => {
    
    return (
        <div className={Styles.container}>
            {data.isLoading ? (
                <h2>Loading ...</h2>
            ) : (
                <Cards data={data.data.results} />
            )}
        </div>
    );
};

export default Main;

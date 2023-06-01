import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

import Styles from "./Main.module.css";

const Main = () => {
    const [data, setData] = useState({
        data: {},
        isLoading: true,
        errorMessage: "",
    });
    useEffect(() => {
        const allCharacters = [];
        for (let i = 1; i < 827; i++) {
            allCharacters.push(i);
        }
        axios
            .get(
                `https://rickandmortyapi.com/api/character/${allCharacters.join(
                    ","
                )}`
            )
            .then((response) => {
                setData({
                    data: response.data,
                    isLoading: false,
                    errorMessage: "",
                });
            })
            .catch(() => {
                setData({
                    data: {},
                    isLoading: false,
                    errorMessage: "An Error Occurred",
                });
            });
    }, []);
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

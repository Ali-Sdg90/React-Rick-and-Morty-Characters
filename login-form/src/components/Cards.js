import axios from "axios";
import React, { useEffect, useState } from "react";

import Styles from "./Cards.module.css";
import Card from "./Card";

const Cards = (props) => {
    const [data, setData] = useState({
        data: [],
        isLoading: true,
        errorMessage: "",
    });

    useEffect(() => {
        const allCharacters = [];
        for (let i = 1; i < 11; i++) {
            allCharacters.push(i + props.step * 10);
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
                    errorMessage: "No Results Found",
                });
            })
            .catch(() => {
                setData({
                    data: [],
                    isLoading: false,
                    errorMessage: "An Error Occurred",
                });
            });
    }, []);

    return (
        <div className={Styles.container}>
            {data ? (
                <>
                    {data.data.map((item) => (
                        <Card data={item} key={item.id} />
                    ))}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Cards;

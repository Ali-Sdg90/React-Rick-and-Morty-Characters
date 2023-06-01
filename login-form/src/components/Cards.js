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
    const [filteredData, setFilteredData] = useState({
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
    }, [props.step]);

    useEffect(() => {
        if (props.searchFor) {
            const filteredCharacters = data.data.filter((char) =>
                char.name.includes(props.searchFor)
            );
            setFilteredData({
                data: filteredCharacters,
                isLoading: false,
                errorMessage: "No Results Found",
            });
        } else {
            setFilteredData({
                data: [],
                isLoading: false,
                errorMessage: "",
            });
        }
    }, [props.searchFor, data.data]);

    const characters = props.searchFor ? filteredData.data : data.data;

    return (
        <div className={Styles.container}>
            {data.isLoading ? (
                <p>Loading...</p>
            ) : characters.length > 0 ? (
                characters.map((item) => <Card data={item} key={item.id} />)
            ) : (
                <p>{characters.errorMessage}</p>
            )}
        </div>
    );
};

export default Cards;

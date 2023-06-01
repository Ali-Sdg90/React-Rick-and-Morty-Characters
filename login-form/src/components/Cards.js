import axios from "axios";
import React, { useEffect, useState } from "react";

const Cards = (props) => {
    const [data, setData] = useState({
        data: [],
        isLoading: true,
        errorMessage: "",
    });

    useEffect(() => {
        const allCharacters = [];
        for (let i = 1; i < 10; i++) {
            allCharacters.push(i + props.step);
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
        <div>
            <h1>HIIIIII</h1>
            {data ? (
                <>
                    {console.log(data)}
                    {data.data.map((item) => (
                        <p key={item.id}>{item.name}</p>
                    ))}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Cards;

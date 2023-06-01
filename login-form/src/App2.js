import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(() => {
        const initialState = [];
        for (let i = 1; i < 21; i++) {
            initialState.push(i);
        }
        return initialState;
    });

    const fetchCharacters = async () => {
        try {
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/${page.join(",")}`
            );
            const newCharacters = [response.data];
            setCharacters((prevCharacters) => [
                ...prevCharacters,
                ...newCharacters,
            ]);
            setPage((prevPage) => {
                const newItems = prevPage[prevPage.length - 1];
                for (let i = newItems; i < newItems + 20; i++) {
                    if (i === 826) {
                        break;
                    }

                    prevPage.push(newItems);
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;
        const scrollPercentage =
            (scrollTop / (scrollHeight - clientHeight)) * 100;
        if (scrollPercentage >= 90) {
            fetchCharacters();
        }
    };

    useEffect(() => {
        fetchCharacters();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

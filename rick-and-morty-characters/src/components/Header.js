import React from "react";

import Styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={Styles.container}>
            <br></br>
            <h1 className={Styles.container__text}>Rick And Morty</h1>
            <h1 className={Styles.container__text}>Characters</h1>
            <div>
                <a
                    href="https://rickandmortyapi.com/api/character"
                    target="_new"
                >
                    826 Characters
                </a>
                <a href="https://rickandmortyapi.com/" target="_new">
                    Rick & Morty api
                </a>
                <a
                    href="https://rickandmortyapi.com/api/location"
                    target="_new"
                >
                    126 Locations
                </a>
            </div>
        </div>
    );
};

export default Header;

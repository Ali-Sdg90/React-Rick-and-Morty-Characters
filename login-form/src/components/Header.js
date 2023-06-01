import React from 'react';

import Styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={Styles.header}>
            <br></br>
            <h1 className={Styles.header__text}>Rick And Morty</h1>
            <h1 className={Styles.header__text}>Characters</h1>
        </div>
    );
};

export default Header;
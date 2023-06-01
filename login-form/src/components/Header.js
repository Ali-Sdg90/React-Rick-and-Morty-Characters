import React from 'react';

import Styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={Styles.header}>
            <h1 className={Styles.header__text}>Rick And Morty Family</h1>
        </div>
    );
};

export default Header;
import React, { useState } from "react";
import Cards from "./Cards";
import InfiniteScroll from "./InfiniteScroll";
import Styles from "./Body.module.css"

const Body = () => {
    const [componentCount, setComponentCount] = useState(1);
    const [searchInput, setSearchInput] = useState("");

    const handleScrollEnd = () => {
        setComponentCount((prevCount) => prevCount + 1);
    };

    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < componentCount; i++) {
            components.push(<Cards key={i} step={i} searchFor={searchInput} />);
        }
        return components;
    };

    return (
        <div>
            <input
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                className={Styles.searchBar}
            />
            {renderComponents()}
            <InfiniteScroll onScrollEnd={handleScrollEnd} />
        </div>
    );
};

export default Body;

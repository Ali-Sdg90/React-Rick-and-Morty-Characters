import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import InfiniteScroll from "./InfiniteScroll";
import Styles from "./Main.module.css";
import { useParams } from "react-router-dom";

const Body = () => {
    const [componentCount, setComponentCount] = useState(1);
    const [searchInput, setSearchInput] = useState("");

    const params = useParams();

    const handleScrollEnd = () => {
        if (componentCount < 84) {
            setComponentCount((prevCount) => prevCount + 1);
        }
        console.log(componentCount);
    };

    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < componentCount; i++) {
            components.push(<Cards key={i} step={i} searchFor={searchInput} />);
        }
        return components;
    };

    useEffect(() => {
        if (params.id) {
            setSearchInput(params.id);
        }
    }, []);

    return (
        <div>
            {console.log("==>", params.id)}
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

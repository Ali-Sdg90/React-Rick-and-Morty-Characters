import React, { useState } from "react";
import Cards from "./Cards";
import InfiniteScroll from "./InfiniteScroll";

const Body = () => {
    const [componentCount, setComponentCount] = useState(1);

    const handleScrollEnd = () => {
        setComponentCount((prevCount) => prevCount + 1);
    };

    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < componentCount; i++) {
            components.push(<Cards key={i} step={i} />);
        }
        return components;
    };

    return (
        <div>
            {renderComponents()}
            <InfiniteScroll onScrollEnd={handleScrollEnd} />
        </div>
    );
};

export default Body;

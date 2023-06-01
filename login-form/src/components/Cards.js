import React from "react";

const Cards = (props) => {
    return (
        <div>
            <>
                {/* {console.log("=>", props.data)} */}
                {props.data.map((item) => {
                    if (item.id < 20) {
                        return (
                            <div key={item.id}>
                                <img src={item.image}></img>
                            </div>
                        );
                    }
                })}
            </>
        </div>
    );
};

export default Cards;

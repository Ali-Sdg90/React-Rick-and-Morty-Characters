import React from "react";
import Styles from "./Card.module.css";
import starPin from "../svg/star-pin.svg";
import starUnpin from "../svg/star-unpin.svg";
import useLocalStorage from "../hook/useLocalStorage";

const Card = (props) => {
    const statusCircle = Styles[props.data.status];

    const [pins, setPins] = useLocalStorage("pins", []);

    const isPinned = pins.includes(props.data.id);

    const pinHandler = () => {
        setPins((prevValue) => {
            const updatedValue = [...prevValue, props.data.id];
            return updatedValue;
        });
    };

    return (
        <div className={Styles.container}>
            <img src={props.data.image} alt="char-image"></img>
            <div>
                <h2>
                    {props.data.id}. {props.data.name}
                </h2>
                <span>
                    <span className={statusCircle}></span>
                    {props.data.status} - {props.data.species}
                </span>
                <p>
                    Origin:
                    <a href={props.data.origin.url}>
                        {" "}
                        {props.data.origin.name}
                    </a>
                </p>
                <p>
                    Last known location:
                    <a href={props.data.location.url}>
                        {" "}
                        {props.data.location.name}
                    </a>
                </p>
                <p>Number of episodes: {props.data.episode.length}</p>
            </div>
            <img
                className={Styles.svg}
                src={isPinned ? starPin : starUnpin}
                onClick={pinHandler}
                alt={isPinned ? "Pinned" : "Unpinned"}
            ></img>
        </div>
    );
};

export default Card;

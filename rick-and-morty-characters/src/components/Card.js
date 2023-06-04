import React from "react";
import Styles from "./Card.module.css";
import starPin from "../svg/star-pin.svg";
import starUnpin from "../svg/star-unpin.svg";
import useLocalStorage from "../hook/useLocalStorage";
import { Link } from "react-router-dom";

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
                    {props.data.origin.name === "unknown" ? (
                        <span> {props.data.origin.name}</span>
                    ) : (
                        <Link
                            to={`/location/${props.data.origin.url.charAt(
                                props.data.origin.url.length - 1
                            )}`}
                        >
                            {" "}
                            {props.data.origin.name}
                        </Link>
                    )}
                </p>
                <p>
                    Last known location:
                    {props.data.location.name === "unknown" ? (
                        <span> {props.data.location.name}</span>
                    ) : (
                        <Link
                            to={`/location/${props.data.location.url.charAt(
                                props.data.location.url.length - 1
                            )}`}
                        >
                            {" "}
                            {props.data.location.name}
                        </Link>
                    )}
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

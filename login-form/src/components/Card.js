import React from "react";

import Styles from "./Card.module.css";

const Card = (props) => {
    const statusCircle = Styles[props.data.status];

    return (
        <div className={Styles.container}>
            {/* <h1>-----------------------------------</h1> */}
            {console.log(props.data)}
            <img src={props.data.image}></img>
            <div>
                <h2>{props.data.id}. {props.data.name}</h2>
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
        </div>
    );
};

export default Card;

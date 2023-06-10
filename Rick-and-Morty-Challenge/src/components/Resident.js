import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Styles from "./Resident.module.css";

const Residents = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <div className={Styles.residentContainer}>
            <Link to={`/React-Rick-and-Morty-Characters/search/${data.name}`}>
                <img src={data.image} alt="char-img"></img>
                <span>
                    <h3>
                        {props.id}. {data.name}
                    </h3>
                </span>
            </Link>
        </div>
    );
};

export default Residents;

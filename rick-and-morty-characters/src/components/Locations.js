import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from "./Loacations.module.css";

import { useParams } from "react-router-dom";

import randLocationImg1 from "../image/locations/1.webp";
import randLocationImg2 from "../image/locations/2.webp";
import randLocationImg3 from "../image/locations/3.jpg";
import randLocationImg4 from "../image/locations/4.jpg";
import randLocationImg5 from "../image/locations/5.webp";
import randLocationImg6 from "../image/locations/6.webp";
import randLocationImg7 from "../image/locations/7.jpg";
import randLocationImg8 from "../image/locations/8.jpg";
import randLocationImg9 from "../image/locations/9.webp";
import Residents from "./Residents";

const Locations = () => {
    const params = useParams();

    const [data, setData] = useState({});
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${params.id}`)
            .then((response) => {
                setData(response.data);
                setIsloading(false);
            })
            .catch(() => {
                setData({
                    errorMessage: "An Error Occurred",
                });
                setIsloading(false);
            });
    }, []);

    return (
        <div className={Styles.container}>
            <img src={randLocationImg1} alt="random-location-img"></img>
            {console.log(data)}
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h2>
                        {data.id}. {data.name}
                    </h2>
                    <br></br>
                    <p>
                        Type: <span>{data.type}</span>
                    </p>
                    <p>
                        Dimension: <span>{data.dimension}</span>
                    </p>
                    <p>
                        Residents: <span>({data.residents.length})</span>
                    </p>
                    {data.residents.map((resident) => (
                        <Residents
                            url={resident}
                            key={resident.match(/\d+/g).map(Number)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Locations;

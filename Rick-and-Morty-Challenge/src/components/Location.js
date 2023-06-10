import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from "./Loacation.module.css";

import { Link, useParams } from "react-router-dom";

import randLocationImg1 from "../image/locations/1.webp";
import randLocationImg2 from "../image/locations/2.webp";
import randLocationImg3 from "../image/locations/3.jpg";
import randLocationImg4 from "../image/locations/4.jpg";
import randLocationImg5 from "../image/locations/5.webp";
import randLocationImg6 from "../image/locations/6.webp";
import randLocationImg7 from "../image/locations/7.jpg";
import randLocationImg8 from "../image/locations/8.jpg";
import randLocationImg9 from "../image/locations/9.webp";
import Residents from "./Resident";

let residentCounter = 0;

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
            });
    }, []);

    const randomImgSelecter = () => {
        switch (Math.floor(Math.random() * 9) + 1) {
            case 1:
                return randLocationImg1;
            case 2:
                return randLocationImg2;
            case 3:
                return randLocationImg3;
            case 4:
                return randLocationImg4;
            case 5:
                return randLocationImg5;
            case 6:
                return randLocationImg6;
            case 7:
                return randLocationImg7;
            case 8:
                return randLocationImg8;
            case 9:
                return randLocationImg9;
        }
    };

    return (
        <div className={Styles.container}>
            {/* {console.log(data)} */}
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <Link to="/React-Rick-and-Morty-Characters">
                        <button>All Characters</button>
                    </Link>

                    <img
                        src={randomImgSelecter()}
                        alt="random-location-img"
                        title="Random location"
                    ></img>
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
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <p>
                            Residents: <span>({data.residents.length})</span>
                        </p>
                        <div>
                            {data.residents.map((resident) => {
                                residentCounter = residentCounter + 1;
                                return (
                                    <Residents
                                        url={resident}
                                        key={residentCounter}
                                        id={residentCounter}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
            {(residentCounter = 0)}
        </div>
    );
};

export default Locations;

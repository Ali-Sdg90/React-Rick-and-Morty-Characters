import React from "react";

import { shorten } from "../helper/function";

const Product = ({ productData }) => {
    return (
        <div>
            <img
                src={productData.image}
                alt="product"
                style={{ width: "200px" }}
            />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href="#">Details</a>
                <div>
                    <button>Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;

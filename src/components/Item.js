import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { id, title, price, pictureURL } = product;
    return (
        <div className="card card-product mb-1 col-xl-3 col-lg-4 col-sm-6 mb-5 p-3">
            <figure className="card-image equal">
                <Link to={`/item/${id}`}>
                    <img src={pictureURL} className="img-fluid img-size" alt="couldnt load" />
                </Link>
            </figure>
            <Link className="card-body" to={`/item/${id}`}>
                <h3 className="card-title">{title}</h3>
                <span className="price">${price}</span>
            </Link>
        </div>
    );
};

export default Item;

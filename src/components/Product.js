import React from 'react';
import { MSG_ADD_TO_CART_SUCCESS } from '../constants/Message';

const Product = ({ product, onAddToCart, onChangeMessage }) => {

    const showRatings = rating => {
        const result = []
        for (let i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fa fa-star"></i>)
        }

        for (let j = 1; j <= (5 - rating); j++) {
            result.push(<i key={j + rating} className="fa fa-star-o"></i>)
        }

        return result
    }

    const handleAddToCart = product => {
        onAddToCart(product)
        onChangeMessage(MSG_ADD_TO_CART_SUCCESS)
    }

    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image}
                        className="img-fluid" alt={product.name} />
                    <a href="#/">
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a href="#/">{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            {
                                showRatings(product.rating)
                            }
                        </li>
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.price}$</span>
                        <span className="right">
                            <a 
                                href="#/" 
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" 
                                data-placement="top" 
                                title="" 
                                data-original-title="Add to Cart"
                                onClick={() => {handleAddToCart(product)}}
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
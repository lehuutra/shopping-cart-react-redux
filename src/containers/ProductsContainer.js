import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import Products from '../components/Products';
import PropTypes from 'prop-types';
import { addToCart, changeMessage } from '../actions';

const ProductsContainer = ({ products, onAddToCart, onChangeMessage }) => {
    return (
        <Products>
            {
                products.map(product => (
                    <Product
                        key={product.id} 
                        product={product}
                        onAddToCart={onAddToCart}
                        onChangeMessage={onChangeMessage}
                    />
                ))
            }
        </Products>
    );
};

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart : product => {
            dispatch(addToCart(product, 1))
        },
        onChangeMessage: message => {
            dispatch(changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
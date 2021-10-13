import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import { MSG_CART_EMPTY } from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { changeMessage, removeProductCart, updateProductCart } from '../actions';

const CartContainer = ({ cart, onDeleteProductInCart, onChangeMessage, onUpdateProductCart }) => {
    return (
        <Cart>
            { showCartItem(cart, onDeleteProductInCart, onChangeMessage, onUpdateProductCart) }
            { showTotalAmount(cart) }
        </Cart>
    );
};

const showCartItem = (cart, onDeleteProductInCart, onChangeMessage, onUpdateProductCart) => {
    var result = <tr>
        <td>
            {MSG_CART_EMPTY}
        </td>
    </tr>
    if (cart.length > 0) {
        result = cart.map((item, index) => {
            return (
                <CartItem
                    key={item.product.id}
                    item={item}
                    index={index}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onChangeMessage={onChangeMessage} 
                    onUpdateProductCart={onUpdateProductCart}
                />
            )
        })
    } 
    return result 
}

const showTotalAmount = cart => {
    var result = null;
    if (cart.length > 0) {
        result = <CartResult cart={cart} />
    }
    return result
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteProductInCart: product => {
            dispatch(removeProductCart(product))
        },
        onChangeMessage: message => {
            dispatch(changeMessage(message))
        },
        onUpdateProductCart: (product, quantity) => {
            dispatch(updateProductCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
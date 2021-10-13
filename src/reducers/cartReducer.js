// import { ADD_TO_CART } from "../constants/ActionType"
import { ADD_TO_CART, DELETE_PRODUCT_CART, UPDATE_PRODUCT_CART } from './../constants/ActionType'

// const data = JSON.parse(localStorage.getItem('CART'))

const initState = []

const cartReducer = (state = initState, action) => {
    const { product, quantity } = action
    var index = -1;
    switch (action.type) {
        case ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            return [...state];
        case DELETE_PRODUCT_CART:
            return state.filter(item => item.product !== action.product)
        case UPDATE_PRODUCT_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity = quantity
            }
            return [...state]
        default:
            return state;
    }
}

const findProductInCart = (cart, product) => {
    var index = -1
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i
                break
            }
        }
    }
    return index
}

export default cartReducer
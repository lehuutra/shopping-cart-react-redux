import { ADD_TO_CART, CHANGE_MESSAGE, DELETE_PRODUCT_CART, UPDATE_PRODUCT_CART } from "../constants/ActionType"

export const addToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = message => {
    return {
        type: CHANGE_MESSAGE,
        message
    }
}

export const removeProductCart = product => {
    return {
        type: DELETE_PRODUCT_CART,
        product
    }
}

export const updateProductCart = (product, quantity) => {
    return {
        type: UPDATE_PRODUCT_CART,
        product,
        quantity
    }
}
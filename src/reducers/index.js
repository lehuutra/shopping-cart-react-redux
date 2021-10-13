import { combineReducers } from "redux";
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    message: messageReducer
})

export default rootReducer
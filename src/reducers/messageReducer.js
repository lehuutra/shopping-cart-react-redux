import { CHANGE_MESSAGE } from "../constants/ActionType"
import { MSG_WELCOME } from "../constants/Message"

const initState = MSG_WELCOME

const messageReducer = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}

export default messageReducer
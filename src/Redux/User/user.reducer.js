import { userActionTypes } from './user.types';

const INIT_STATE = {
    currentUser: null,
    sideBarIsHidden: true
}

const userReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sideBarIsHidden: !state.sideBarIsHidden
            }
        default:
            return state
    }
}

export default userReducer;

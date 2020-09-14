import { userCountActionTypes } from './user-count.types';

const INIT_STATE = {
    userCount: null,
    isGettingUserCount: false,
    userCountError: ''
};

const userCountReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case userCountActionTypes.GET_USER_COUNT_START:
            return {
                ...state,
                isGettingUserCount: true
            }
        case userCountActionTypes.GET_USER_COUNT_SUCCESS:
            return {
                ...state,
                isGettingUserCount: false,
                userCount: action.payload
            }
        case userCountActionTypes.GET_USER_COUNT_FAILURE:
            return {
                ...state,
                isGettingUserCount: false,
                userCountError: action.payload
            }
        default:
            return state;
    }
}

export default userCountReducer;
import { expiredActionTypes } from './Expired.types';

const INIT_STATE = {
    expiredUsers: [],
    isGettingExpired: false,
    getExpiredErrMsg: '',
    prevDoc: null,
    isGettingMoreExpired: false,
    getMoreExpiredErrMsg: ''
}

const expiredReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case expiredActionTypes.GET_EXPIRED_START:
            return {
                ...state,
                isGettingExpired: true
            }
        case expiredActionTypes.GET_EXPIRED_SUCCESS:
            return {
                ...state,
                isGettingExpired: false,
                expiredUsers: [...action.payload]
            }
        case expiredActionTypes.GET_EXPIRED_FAILURE:
            return {
                ...state,
                isGettingExpired: false,
                getExpiredErrMsg: action.payload
            }
        case expiredActionTypes.SET_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case expiredActionTypes.GET_MORE_EXPIRED_START:
            return {
                ...state,
                isGettingMoreExpired: true
            }
        case expiredActionTypes.GET_MORE_EXPIRED_SUCCESS:
            return {
                ...state,
                isGettingMoreExpired: false,
                expiredUsers: [...state.expiredUsers, ...action.payload]
            }
        case  expiredActionTypes.GET_MORE_EXPIRED_FAILURE:
            return {
                ...state,
                isGettingMoreExpired: false,
                getMoreExpiredErrMsg: action.payload
            }
        default:
            return state
    }
};

export default expiredReducer;

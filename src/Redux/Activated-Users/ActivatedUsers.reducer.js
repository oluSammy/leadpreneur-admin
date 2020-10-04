import { activatedActionTypes } from './ActivatedUsers.types';

const INIT_STATE = {
    activatedUsers: [],
    isGettingActivatedUsers: false,
    getActivatedUsersErrMsg: '',
    prevDoc: null,
    isGettingMoreActiveUsers: false,
    moreActiveUsersErrMsg: ''
}

const activatedUsersReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case activatedActionTypes.GET_ACTIVATED_START:
            return {
                ...state,
                isGettingActivatedUsers: true
            }
        case activatedActionTypes.GET_ACTIVATED_SUCCESS:
            return {
                ...state,
                isGettingActivatedUsers: false,
                activatedUsers: [...action.payload]
            }
        case activatedActionTypes.GET_ACTIVATED_FAILURE:
            return {
                ...state,
                isGettingActivatedUsers: false,
                getActivatedUsersErrMsg: action.payload
            }
        case activatedActionTypes.SET_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case activatedActionTypes.GET_MORE_ACTIVE_USERS_START:
            return {
                ...state,
                isGettingMoreActiveUsers: true
            }
        case activatedActionTypes.GET_MORE_ACTIVE_USERS_SUCCESS:
            return {
                ...state,
                isGettingMoreActiveUsers: false,
                activatedUsers: [...state.activatedUsers, ...action.payload]
            }
        case activatedActionTypes.GET_MORE_ACTIVE_USERS_FAILURE:
            return {
                ...state,
                isGettingMoreActiveUsers: false,
                moreActiveUsersErrMsg: action.payload
            }
        default:
            return state
    }
}

export default activatedUsersReducer;
import { inactiveUsersActionTypes } from './InactiveUser..types';

const INIT_STATE = {
    inactiveUsers: [],
    isGettingInactiveUsers: false,
    getInactiveErrMsg: '',
    prevDoc: null,
    isGettingMoreInactiveUsers: false,
    getMoreInactiveErrMsg: ''
}

const inactiveUsersReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case inactiveUsersActionTypes.GET_INACTIVE_START:
            return {
                ...state,
                isGettingInactiveUsers: true
            }
        case inactiveUsersActionTypes.GET_INACTIVE_SUCCESS:
            return {
                ...state,
                isGettingInactiveUsers: false,
                inactiveUsers: [...action.payload]
            }
        case inactiveUsersActionTypes.GET_INACTIVE_FAILURE:
            return {
                ...state,
                isGettingInactiveUsers: true,
                getInactiveErrMsg: action.payload
            }
        case inactiveUsersActionTypes.SET_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case inactiveUsersActionTypes.GET_MORE_INACTIVE_START:
            return {
                ...state,
                isGettingMoreInactiveUsers: true
            }
        case inactiveUsersActionTypes.GET_MORE_INACTIVE_SUCCESS:
            return {
                ...state,
                isGettingMoreInactiveUsers: false,
                inactiveUsers: [...state.inactiveUsers, ...action.payload]
            }
        case inactiveUsersActionTypes.GET_MORE_INACTIVE_FAILURE:
            return {
                ...state,
                isGettingMoreInactiveUsers: false,
                getMoreInactiveErrMsg: action.payload
            }
        default:
            return state
    }
}

export default inactiveUsersReducer;
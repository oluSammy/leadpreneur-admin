import { usersActionTypes } from './users.types';

const INIT_STATE = {
    users: [],
    isGettingUsers: false,
    getUserErrMsg: '',
    prevDoc: null,
    isGettingMoreUsers: false,
    getMoreErrMsg: '',
    userDetail: null,
    isGettingUserDetail: false,
    getUserDetailErrMsg: ''
}

export const usersReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.GET_INIT_USERS_START:{
            return {
                ...state,
                isGettingUsers: true
            }
        }
        case usersActionTypes.GET_INIT_USERS_SUCCESS: {
            return {
                ...state,
                isGettingUsers: false,
                users: [...action.payload]
            }
        }
        case usersActionTypes.GET_INIT_USERS_FAILURE: {
            return {
                ...state,
                isGettingUsers: false,
                getUserErrMsg: action.payload
            }
        }
        case usersActionTypes.SET_PREV_DOC: {
            return {
                ...state,
                prevDoc: action.payload
            }
        }
        case usersActionTypes.GET_MORE_USERS_START: {
            return {
                ...state,
                isGettingMoreUsers: true
            }
        }
        case usersActionTypes.GET_MORE_USERS_SUCCESS: {
            return {
                ...state,
                isGettingMoreUsers: false,
                users: [...state.users, ...action.payload]
            }
        }
        case usersActionTypes.GET_MORE_USERS_FAILURE: {
            return {
                ...state,
                isGettingMoreUsers: true,
                getMoreErrMsg: action.payload
            }
        }
        case usersActionTypes.GET_USERS_DETAIL_START: {
            return {
                ...state,
                isGettingUserDetail: true,
            }
        }
        case usersActionTypes.GET_USERS_DETAIL_SUCCESS: {
            return {
                ...state,
                isGettingUserDetail: false,
                userDetail: action.payload
            }
        }
        case usersActionTypes.GET_USERS_DETAIL_FAILURE: {
            return {
                ...state,
                isGettingUserDetail: false,
                getUserDetailErrMsg: action.payload
            }
        }
        default:
            return state
    }
}

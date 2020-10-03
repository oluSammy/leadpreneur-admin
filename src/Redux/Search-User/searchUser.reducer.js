import { searchUserActionTypes } from './searchUser.types';

const INIT_STATE = {
    searchResult: null,
    isSearching: false,
    searchErrorMsg: ''
}


const searchUserReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case searchUserActionTypes.SEARCH_USER_START:
            return {
                ...state,
                isSearching: true
            }
        case searchUserActionTypes.SEARCH_USER_SUCCESS:
            return {
                ...state,
                isSearching: false,
                searchResult: action.payload
            }
        case searchUserActionTypes.SEARCH_USER_FAILURE:
            return {
                ...state,
                isSearching: false,
                searchErrorMsg: action.payload
            }
        default:
            return state
    }
}

export default searchUserReducer;
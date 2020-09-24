import { categoryActionTypes } from './category.types';

const INIT_STATE = {
    categories: [],
    isAddingCategories: false,
    addCategoryErrMsg: '',
    isGettingCategory: false,
    getCategoryErrMsg: ''
}

export const categoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case categoryActionTypes.ADD_CATEGORY_START:
            return {
                ...state,
                isAddingCategories: true
            }
        case categoryActionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isAddingCategories: false
            }
        case categoryActionTypes.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                isAddingCategories: false,
                addCategoryErrMsg: action.payload
            }
        case categoryActionTypes.GET_CATEGORY_START:
            return {
                ...state,
                isGettingCategory: true
            }
        case categoryActionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isGettingCategory: false,
                categories: action.payload
            }
        case categoryActionTypes.GET_CATEGORY_FAILURE:
            return {
                ...state,
                isGettingCategory: false,
                getCategoryErrMsg: action.payload
            }
        case categoryActionTypes.UPDATE_CATEGORY:
            return {
                ...state,
                categories: [...action.payload, ...state.categories]
            }
        default:
            return state
    }
}

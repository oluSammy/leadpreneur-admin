import { categoryActionTypes } from './category.types';
import { firestore } from '../../firebase/firebase.utils';


const addCategoryStart = () => ({
    type: categoryActionTypes.ADD_CATEGORY_START
});

const addCategorySuccess = categories => ({
    type: categoryActionTypes.ADD_CATEGORY_SUCCESS,
    payload: categories
});

const addCategoriesFailure = errMsg => ({
    type: categoryActionTypes.GET_CATEGORY_FAILURE,
    payload: errMsg
});

export const asyncAddCategory = category => {
    return async dispatch => {
        try {
            dispatch(addCategoryStart());
            const categoryRef = firestore.collection("categories");
            categoryRef.add({
                categoryName: category
            });
            dispatch(addCategorySuccess())
        } catch (errorMsg) {
            dispatch(addCategoriesFailure(errorMsg));
        }
    }
}

const getCategoryStart = () => ({
    type: categoryActionTypes.GET_CATEGORY_START
});

const getCategorySuccess = categories => ({
    type: categoryActionTypes.GET_CATEGORY_SUCCESS,
    payload: categories
});

const getCategoriesFailure = errMsg => ({
    type: categoryActionTypes.GET_CATEGORY_FAILURE,
    payload: errMsg
});

export const asyncGetCategories = () => {
    return async dispatch => {
        try {
            dispatch(getCategoryStart());
            const categoryRef = firestore.collection("categories");
            categoryRef.onSnapshot(docSnapshot => {
                const categories = [];
                docSnapshot.forEach(doc => {
                    categories.push(doc.data());
                });
                dispatch(getCategorySuccess(categories));
            })
        } catch (error) {
            dispatch(getCategoriesFailure(error));
        }
    }
}
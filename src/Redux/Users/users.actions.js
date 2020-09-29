import { usersActionTypes } from './users.types';
import { firestore } from '../../firebase/firebase.utils';

const getUsersStart = () => ({
    type: usersActionTypes.GET_INIT_USERS_START
});

const getUsersSuccess = users => ({
    type: usersActionTypes.GET_INIT_USERS_SUCCESS,
    payload: users
});

const getUsersFailure = errMsg => ({
    type: usersActionTypes.GET_INIT_USERS_FAILURE,
    payload: errMsg
});

const setPrevDoc = doc => ({
    type: usersActionTypes.SET_PREV_DOC,
    payload: doc
});

const getMoreUsersStart = () => ({
    type: usersActionTypes.GET_MORE_USERS_START
});

const getMoreUsersSuccess = users => ({
    type: usersActionTypes.GET_MORE_USERS_SUCCESS,
    payload: users
});

const getMoreUsersFailure = errorMsg => ({
    type: usersActionTypes.GET_MORE_USERS_FAILURE,
    payload: errorMsg
})

export const asyncGetInitUsers = () => {
    return async dispatch => {
        try {
            dispatch(getUsersStart());
            const usersRef = firestore.collection("users").orderBy("registrationDate", "desc").limit(1);
            const usersDoc = await usersRef.get();
            let users = [];
            usersDoc.docs.forEach(doc => {
                users.push(doc.data());
            });
            dispatch(getUsersSuccess(users));
            const lastDoc = usersDoc.docs[usersDoc.docs.length - 1]
            dispatch(setPrevDoc(lastDoc));

        } catch (errorMsg) {
            dispatch(getUsersFailure(errorMsg))
        }
    }
}

export const asyncGetMoreUsers = prevDoc => {

    return async dispatch => {
        try {
            dispatch(getMoreUsersStart());

            const usersRef = firestore.collection("users").orderBy("registrationDate", "desc").startAfter(prevDoc).limit(1);
            const newUsersDoc = await usersRef.get();
            let users = []
            newUsersDoc.docs.forEach(doc =>{
                users.push(doc.data())
            });
            dispatch(getMoreUsersSuccess(users));
            const lastDoc = newUsersDoc.docs[newUsersDoc.docs.length - 1]
            dispatch(setPrevDoc(lastDoc));
        } catch (e) {
            dispatch(getMoreUsersFailure(e))
        }
    }
}
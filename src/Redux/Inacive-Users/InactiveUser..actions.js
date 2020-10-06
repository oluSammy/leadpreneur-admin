import { inactiveUsersActionTypes } from './InactiveUser..types';
import { firestore } from '../../firebase/firebase.utils';

const getInactiveUserStart = () => ({
    type: inactiveUsersActionTypes.GET_INACTIVE_START
});

const getInactiveUserSuccess = users => ({
    type: inactiveUsersActionTypes.GET_INACTIVE_SUCCESS,
    payload: users
});

const geInactiveUserFailure = errMsg => ({
    type: inactiveUsersActionTypes.GET_INACTIVE_FAILURE,
    payload: errMsg
});

const setPrevDoc = doc => ({
    type: inactiveUsersActionTypes.SET_PREV_DOC,
    payload: doc
});

const getMoreInactiveUserStart =() => ({
    type: inactiveUsersActionTypes.GET_MORE_INACTIVE_START
});

const getMoreInactiveUserSuccess = users => ({
    type: inactiveUsersActionTypes.GET_MORE_INACTIVE_SUCCESS,
    payload: users
});

const getMoreInactiveUserFailure = errorMsg => ({
    type: inactiveUsersActionTypes.GET_MORE_INACTIVE_FAILURE,
    payload: errorMsg
});

export const asyncGetInactiveUsers = () => {
    return async dispatch => {
        try {
            dispatch(getInactiveUserStart());
            const usersRef = firestore.collection("users").where("isActivated", "==", false)
            .orderBy("registrationDate", "desc").limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = [];
                docSnapShot.docs.forEach(doc => {
                    users.push({id: doc.id, data: doc.data()});
                });
                dispatch(getInactiveUserSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });
        } catch (errorMsg) {
            dispatch(geInactiveUserFailure(errorMsg))
        }
    }
}

export const asyncGetMoreInactiveUsers = prevDoc => {
    return async dispatch => {
        try {
            dispatch(getMoreInactiveUserStart());
            const usersRef = firestore.collection("users").where("isActivated", "==", false)
            .orderBy("registrationDate", "desc").startAfter(prevDoc).limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = []
                docSnapShot.docs.forEach(doc =>{
                    users.push({id: doc.id, data: doc.data()})
                });
                dispatch(getMoreInactiveUserSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });

        } catch (error) {
            dispatch(getMoreInactiveUserFailure(error));
        }
    }
}
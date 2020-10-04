import { activatedActionTypes } from './ActivatedUsers.types';
import { firestore } from '../../firebase/firebase.utils';

const getActivatedUsersStart = () => ({
    type: activatedActionTypes.GET_ACTIVATED_START
});

const getActivatedUsersSuccess = users => ({
    type: activatedActionTypes.GET_ACTIVATED_SUCCESS,
    payload: users
});

const getActivatedUsersFailure = errorMsg => ({
    type: activatedActionTypes.GET_ACTIVATED_FAILURE,
    payload: errorMsg
});

const setPrevDoc = doc => ({
    type: activatedActionTypes.SET_PREV_DOC,
    payload: doc
})

const getMoreActiveUsersStart = () => ({
    type: activatedActionTypes.GET_MORE_ACTIVE_USERS_START
});

const getMoreActiveUsersSuccess = users => ({
    type: activatedActionTypes.GET_MORE_ACTIVE_USERS_SUCCESS,
    payload: users
});

const getMoreActiveUsersFailure = errMsg => ({
    type: activatedActionTypes.GET_MORE_ACTIVE_USERS_FAILURE,
    payload: errMsg
});

export const asyncGetActivatedUsers = () => {
    return async dispatch => {
        try {
            dispatch(getActivatedUsersStart())
            const usersRef = firestore.collection("users").where("isActivated", "==", true)
            .orderBy("registrationDate", "desc").limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = [];
                docSnapShot.docs.forEach(doc => {
                    users.push({id: doc.id, data: doc.data()});
                });
                dispatch(getActivatedUsersSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });

        } catch (errorMsg) {
            dispatch(getActivatedUsersFailure(errorMsg))
        }
    }
};

export const asyncGetMoreActiveUsers = prevDoc => {
    return async dispatch => {
        try {
            dispatch(getMoreActiveUsersStart());
            const usersRef = firestore.collection("users").where("isActivated", "==", true)
            .orderBy("registrationDate", "desc").startAfter(prevDoc).limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = []
                docSnapShot.docs.forEach(doc =>{
                    users.push({id: doc.id, data: doc.data()})
                });
                dispatch(getMoreActiveUsersSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });

        } catch (errorMsg) {
            dispatch(getMoreActiveUsersFailure(errorMsg));
        }
    }
}

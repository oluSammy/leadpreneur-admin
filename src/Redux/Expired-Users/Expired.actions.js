import { expiredActionTypes } from './Expired.types';
import { firestore } from '../../firebase/firebase.utils';

const getExpiredStart = () => ({
    type: expiredActionTypes.GET_EXPIRED_START
});

const getExpiredSuccess = users => ({
    type: expiredActionTypes.GET_EXPIRED_SUCCESS,
    payload: users
});

const getExpiredFailure = errMsg => ({
    type: expiredActionTypes.GET_EXPIRED_FAILURE,
    payload: errMsg
});

const setPrevDoc = prevDoc => ({
    type: expiredActionTypes.SET_PREV_DOC,
    payload: prevDoc
});

const getMoreExpiredStart = () => ({
    type: expiredActionTypes.GET_MORE_EXPIRED_START
});

const getMoreExpiredSuccess = users => ({
    type: expiredActionTypes.GET_MORE_EXPIRED_SUCCESS,
    payload: users
});

const getMoreExpiredFailure = errMsg => ({
    type: expiredActionTypes.GET_MORE_EXPIRED_FAILURE,
    payload: errMsg
});

export const asyncGetExpiredUsers = () => {
    return async dispatch => {
        try {
            dispatch(getExpiredStart());
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            const usersRef = firestore.collection("users").where("expiration", "<", startOfDay)
            .orderBy("expiration", "desc").limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = [];
                docSnapShot.docs.forEach(doc => {
                    users.push({id: doc.id, data: doc.data()});
                });
                dispatch(getExpiredSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });


        } catch (errMsg) {
            dispatch(getExpiredFailure(errMsg))
        }
    }
}

export const asyncGetMoreExpiredUsers = prevDoc => {
    return async dispatch => {
        try {
            dispatch(getMoreExpiredStart());
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            const usersRef = firestore.collection("users").where("expiration", "<", startOfDay)
            .orderBy("expiration", "desc").startAfter(prevDoc).limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = [];
                docSnapShot.docs.forEach(doc => {
                    users.push({id: doc.id, data: doc.data()});
                });
                dispatch(getMoreExpiredSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });

        } catch (errMsg) {
            dispatch(getMoreExpiredFailure(errMsg))
        }
    }
}
import { usersActionTypes } from './users.types';
import { firestore } from '../../firebase/firebase.utils';
import Swal from 'sweetalert2';
import firebase from 'firebase/app';

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
});

const getUserDetailStart = () => ({
    type: usersActionTypes.GET_USERS_DETAIL_START
});

const getUserDetailSuccess = userDetail => ({
    type: usersActionTypes.GET_USERS_DETAIL_SUCCESS,
    payload: userDetail
});

const getUserDetailFailure = errMsg => ({
    type: usersActionTypes.GET_USERS_DETAIL_FAILURE,
    payload: errMsg
});

export const asyncGetInitUsers = () => {
    return async dispatch => {
        try {
            dispatch(getUsersStart());
            const usersRef = firestore.collection("users").orderBy("registrationDate", "desc").limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = [];
                docSnapShot.docs.forEach(doc => {
                    users.push({id: doc.id, data: doc.data()});
                });
                dispatch(getUsersSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });

        } catch (errorMsg) {
            dispatch(getUsersFailure(errorMsg));
        }
    }
}

export const asyncGetMoreUsers = prevDoc => {

    return async dispatch => {
        try {
            dispatch(getMoreUsersStart());

            const usersRef = firestore.collection("users").orderBy("registrationDate", "desc").startAfter(prevDoc).limit(30);
            usersRef.onSnapshot(docSnapShot => {
                let users = []
                docSnapShot.docs.forEach(doc =>{
                    users.push({id: doc.id, data: doc.data()})
                });
                dispatch(getMoreUsersSuccess(users));
                const lastDoc = docSnapShot.docs[docSnapShot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });
        } catch (e) {
            dispatch(getMoreUsersFailure(e));
        }
    }
}

export const asyncGetUserDetail = userId => {
    return async dispatch => {
        try {
            dispatch(getUserDetailStart());
            const userRef = firestore.collection('users').doc(`${userId}`)
            userRef.onSnapshot(docSnapShot => {
                dispatch(getUserDetailSuccess(docSnapShot.data()));
            })

        } catch (errMsg) {
            dispatch(getUserDetailFailure(errMsg));
        }
    }
}

export const asyncUpdateActivationStatus = (status, userId) => {
    return async () => {
        try {
            const userRef = firestore.collection('users').doc(`${userId}`);
            const countRef = firestore.collection('users_agents_count').doc('Kd3xKFGqDNZjnOolRxN2')
            if(status === 'activate') {
                let today = new Date();
                today.setDate(today.getDate() + 365);
                console.log(today);
                const fireStamp = new firebase.firestore.Timestamp.fromDate(today);
                await userRef.update({isActivated: true, expiration: fireStamp})
                await countRef.update({activatedUsers: firebase.firestore.FieldValue.increment(1)})
            } else {
                await userRef.update({isActivated: false, expiration: null});
                await countRef.update({activatedUsers: firebase.firestore.FieldValue.increment(-1)})
            }

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Could not update user's activation status`,
            })
        }

    }
}
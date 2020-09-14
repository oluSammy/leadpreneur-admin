import { firestore } from '../../firebase/firebase.utils';
import { userCountActionTypes } from './user-count.types';

const getUserCountStart = () => ({
    type: userCountActionTypes.GET_USER_COUNT_START
});

const getUserCountSuccess = userCount => ({
    type: userCountActionTypes.GET_USER_COUNT_SUCCESS,
    payload: userCount
});

const getUserCountFailure = error => ({
    type: userCountActionTypes.GET_USER_COUNT_FAILURE,
    payload: error
});

export const asyncGetUserCount = () => {
    return async dispatch => {
        try {
            dispatch(getUserCountStart());

            const userCountRef = firestore.collection('users_agents_count');
            const userCountDocs = await userCountRef.get();
            userCountDocs.docs.forEach(doc => {
                dispatch(getUserCountSuccess(doc.data()));
            });
        } catch (error) {
            dispatch(getUserCountFailure(error));
        }
    }
}
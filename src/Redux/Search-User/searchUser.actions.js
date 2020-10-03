import { firestore } from '../../firebase/firebase.utils';
import { searchUserActionTypes } from './searchUser.types';
import Swal from 'sweetalert2';

const searchUsersStart = () => ({
    type: searchUserActionTypes.SEARCH_USER_START
});

const searchUsersSuccess = searchResult => ({
    type: searchUserActionTypes.SEARCH_USER_SUCCESS,
    payload: searchResult
});

const searchUsersFailure = errMsg => ({
    type: searchUserActionTypes.SEARCH_USER_FAILURE,
    payload: errMsg
});

export const asyncSearchUser = searchString => {
    return async dispatch => {

        try {
            dispatch(searchUsersStart());
            const usersRef = firestore.collection('users'); //userRef

            const nameDoc = await usersRef.where('name', '==', `${searchString}`).get();   //get users by name
            const usernameDoc = await usersRef.where('username', '==', `${searchString}`).get();   //get users by username

            if(nameDoc.empty && usernameDoc.empty){
                dispatch(searchUsersFailure('Empty Doc'));
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${searchString} does not match any user`
                })
            } else {
                const searchResults = [];

                //push data into array
                nameDoc.docs.forEach(doc => searchResults.push({ id: doc.id, data: doc.data() }));
                usernameDoc.docs.forEach(doc => searchResults.push({ id: doc.id, data: doc.data() }));

                const uniqueSearchSet = new Set(searchResults); //remove duplicates from array
                const uniqueSearchResult = [...uniqueSearchSet];    //convert back to array
                dispatch(searchUsersSuccess(uniqueSearchResult));
            }

        } catch (errMsg) {
            dispatch(searchUsersFailure(errMsg));
        }
    }
}
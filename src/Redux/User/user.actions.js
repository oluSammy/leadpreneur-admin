import { userActionTypes } from './user.types';

export const setUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

export const toggleSideBar = () => ({
    type: userActionTypes.TOGGLE_SIDEBAR
});

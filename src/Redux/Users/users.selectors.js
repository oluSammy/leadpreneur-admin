import { createSelector } from 'reselect';

const selectUsers = state => state.users;

export const selectIsGettingUsers = createSelector(
    [selectUsers],
    users => users.isGettingUsers
);

export const selectUsersSlice = createSelector(
    [selectUsers],
    users => users.users
);

export const selectPrevDoc = createSelector(
    [selectUsers],
    users => users.prevDoc
);

export const isGettingMoreUsers = createSelector(
    [selectUsers],
    users => users.isGettingMoreUsers
);

export const selectIsGettingUserDetail = createSelector(
    [selectUsers],
    users => users.isGettingUserDetail
);

export const selectUserDetail = createSelector(
    [selectUsers],
    users => users.userDetail
);


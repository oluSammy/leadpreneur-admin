import { createSelector } from 'reselect';

const selectUserCount = state => state.userCount;

export const selectUserCountSlice = createSelector(
    [selectUserCount],
    userCount => userCount.userCount
);

export const selectIsGettingUserCountSlice = createSelector(
    [selectUserCount],
    userCount => userCount.isGettingUserCount
);

export const selectUserCountError = createSelector(
    [selectUserCount],
    userCount => userCount.userCountError
);

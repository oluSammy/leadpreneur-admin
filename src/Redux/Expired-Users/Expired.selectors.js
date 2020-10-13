    import { createSelector } from 'reselect';

const selectExpiredUsers = state => state.expiredUsers;

export const selectIsGettingExpired = createSelector(
    [selectExpiredUsers],
    expiredUsers => expiredUsers.isGettingExpired
);

export const selectExpired = createSelector(
    [selectExpiredUsers],
    expiredUsers => expiredUsers.expiredUsers
);

export const selectExpiredPrevDoc = createSelector(
    [selectExpiredUsers],
    expiredUsers => expiredUsers.prevDoc
);

export const selectIsGettingMoreExpired = createSelector(
    [selectExpiredUsers],
    expiredUsers => expiredUsers.isGettingMoreExpired
);
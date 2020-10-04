import { createSelector } from 'reselect';

const selectInactiveUsers = state => state.inactiveUsers;

export const selectIsGettingInactiveUsers = createSelector(
    [selectInactiveUsers],
    inactiveUsers => inactiveUsers.isGettingInactiveUsers
);

export const selectInactiveUsersSlice = createSelector(
    [selectInactiveUsers],
    inactiveUsers => inactiveUsers.inactiveUsers
);

export const selectInactivePrevDoc = createSelector(
    [selectInactiveUsers],
    inactiveUsers => inactiveUsers.prevDoc
);

export const selectIsGettingMoreInactive = createSelector(
    [selectInactiveUsers],
    inactiveUsers => inactiveUsers.isGettingMoreInactiveUsers
);
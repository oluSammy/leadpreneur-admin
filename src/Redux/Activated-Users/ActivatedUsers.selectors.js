import { createSelector } from 'reselect';

const selectActivatedUsers = state => state.activatedUsers;

export const selectIsGettingActivatedUsers = createSelector(
    [selectActivatedUsers],
    activatedUsers => activatedUsers.isGettingActivatedUsers
);

export const selectActiveUsers = createSelector(
    [selectActivatedUsers],
    activatedUsers => activatedUsers.activatedUsers
);

export const selectPrevActiveDoc = createSelector(
    [selectActivatedUsers],
    activatedUsers => activatedUsers.prevDoc
);

export const selectIsGettingMoreActiveUsers = createSelector(
    [selectActivatedUsers],
    activatedUsers => activatedUsers.isGettingMoreActiveUsers
);

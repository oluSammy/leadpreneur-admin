import { createSelector } from 'reselect';

const selectSearchUser = state => state.searchUser;

export const selectIsSearchingUsers = createSelector(
    [selectSearchUser],
    searchUser => searchUser.isSearching
);

export const selectUserSearchResult = createSelector(
    [selectSearchUser],
    searchUser => searchUser.searchResult
);

export const selectUserSearchErrMsg = createSelector(
    [selectSearchUser],
    searchUser => searchUser.searchErrorMsg
)
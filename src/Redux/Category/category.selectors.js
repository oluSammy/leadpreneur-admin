import { createSelector } from 'reselect';

const selectCategories = state => state.category;

export const selectIsAddingCategories = createSelector(
    [selectCategories],
    category => category.isAddingCategories
);

import { createSelector } from 'reselect';

const selectCategories = state => state.category;

export const selectIsAddingCategories = createSelector(
    [selectCategories],
    category => category.isAddingCategories
);

export const selectCategoriesSlice = createSelector(
    [selectCategories],
    category => category.categories
);

export const selectIsGettingCategory = createSelector(
    [selectCategories],
    category => category.isGettingCategory
)
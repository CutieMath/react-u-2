// 1. Selector is where we transforms data and do business logic
// When getting data from an API, we only get the most pure format of them.

// 2. Use reselect to cache the value of previous selector => Memoization
// This is to prevent components from re-rendering when the data is the same

import { createSelector } from "reselect";

// Create initial selector
const selectInitialCategoryReducer = (state) => state.categories;

// Create memoized selector
export const selectMemoizedCategories = createSelector(
  [selectInitialCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// Create second memoized selector which uses the first memoized selector
export const selectCategoriesMap = createSelector(
  [selectMemoizedCategories],
  (categories) => {
    return categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {});
  }
);

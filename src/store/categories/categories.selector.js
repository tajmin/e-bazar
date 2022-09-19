import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectAllCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(
  [selectAllCategories],
  (categories) =>
    categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {})
);

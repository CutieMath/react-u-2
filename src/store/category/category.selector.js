// Selector is where we transforms data and do business logic
// When getting data from an API, we only get the most pure format of them.
export const selectCategoriesMap = (state) =>
  state.categories.categories.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});

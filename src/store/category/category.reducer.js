import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
  categories: [],
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

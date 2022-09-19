import { createAction } from "../../Utility/Reducer/reducer.utility";
import { CATEGORIES_ACTION_TYPES } from "./categories.actiontypes";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

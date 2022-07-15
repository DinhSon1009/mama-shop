import { createAction } from "../../utils/reducer/reducer.utils";
import CATEGORIES_ACTION_TYPES from "./categoryTypes";

export const setCategoriesArray = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_ARRAY, categoriesMap);

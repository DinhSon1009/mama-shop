import { combineReducers } from "redux";
import { categoryReducer } from "./category/categoryReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  userReducer,
  categoryReducer,
});

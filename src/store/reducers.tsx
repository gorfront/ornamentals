import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/categoriesSlice/categoriesSlice";
import { subCategoriesReducer } from "./slices/subCategoriesSlice/subCategoriesSlice";
import { mainReducer } from "./slices/mainSlice/mainSlice";

const rootReducer = combineReducers({
  categories: categoryReducer,
  subCategories: subCategoriesReducer,
  main: mainReducer,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/categoriesSlice/categoriesSlice";
import { subCategoriesReducer } from "./slices/subCategoriesSlice/subCategoriesSlice";
import { mainReducer } from "./slices/mainSlice/mainSlice";
import { genderReducer } from "./slices/genderSlice/genderSlice";

const rootReducer = combineReducers({
  categories: categoryReducer,
  subCategories: subCategoriesReducer,
  main: mainReducer,
  gender: genderReducer,
});

export default rootReducer;

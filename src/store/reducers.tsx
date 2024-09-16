import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/categoriesSlice/categoriesSlice";
import { subCategoriesReducer } from "./slices/subCategoriesSlice/subCategoriesSlice";
import { mainReducer } from "./slices/mainSlice/mainSlice";
import { genderReducer } from "./slices/genderSlice/genderSlice";
import { priceReducer } from "./slices/priceSlice/priceSlice";

const rootReducer = combineReducers({
  categories: categoryReducer,
  subCategories: subCategoriesReducer,
  main: mainReducer,
  gender: genderReducer,
  price: priceReducer,
});

export default rootReducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategory } from "./categoriesAPI";

interface Category {
  id: string;
  name: string;
  image: string;
  active: boolean;
}

const initialState: Category[] = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      return [...state, action.payload];
    },
    toggleActiveCategory: (state, { payload }) => {
      return state.map((item) =>
        item.id === payload
          ? { ...item, active: !item.active }
          : {
              ...item,
              active: false,
            }
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const { addCategory, toggleActiveCategory } = categoriesSlice.actions;

export const categoryReducer = categoriesSlice.reducer;

export const selectCategories = (state: { categories: Category[] }) =>
  state.categories;

export { fetchCategory };

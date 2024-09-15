import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSubCategory } from "./subCategoriesAPI";

interface SubCategory {
  id: string;
  name: string;
  active: boolean;
}

const initialState: SubCategory[] = [];

const subCategories = createSlice({
  name: "subCategories",
  initialState,
  reducers: {
    addSubCategory: (state, action: PayloadAction<{ name: string }>) => {
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          name: action.payload.name,
          active: false,
        },
      ];
    },
    toggleActiveSubCategory: (state, { payload }) => {
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
    builder.addCase(fetchSubCategory.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const { addSubCategory, toggleActiveSubCategory } =
  subCategories.actions;

export const subCategoriesReducer = subCategories.reducer;

export const selectSubCategory = (state: { subCategories: SubCategory[] }) =>
  state.subCategories;

export { fetchSubCategory };

import { createSlice } from "@reduxjs/toolkit";
import { fetchMain } from "./mainSliceAPI";

export interface Main {
  id: string;
  image: string;
  name: string;
  price: string;
  category: string[];
  subcategory: string[];
  active: boolean;
  gender: string[];
}

const initialState: Main[] = [];

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleActiveMain: (state, { payload }) => {
      return state.map((item) =>
        item.id === payload
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      );
    },
    addMain: (state, { payload }) => {
      return [
        ...state,
        {
          ...payload,
          active: false,
          id: new Date().getTime().toString(),
          name: Math.floor(Math.random() * 1000) + "abcdef",
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMain.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const { toggleActiveMain, addMain } = mainSlice.actions;

export const mainReducer = mainSlice.reducer;

export const selectMain = (state: { main: Main[] }) => state.main;
export { fetchMain };

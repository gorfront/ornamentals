import { createSlice } from "@reduxjs/toolkit";
import { fetchGender } from "./genderAPI";

interface Gender {
  name: string;
  id: string;
  active: boolean;
  activePhoto: string;
  passivePhoto: string;
}

const initialState: Gender[] = [];

const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    toggleActiveGender: (state, { payload }) => {
      return state.map((gender) =>
        gender.id === payload
          ? { ...gender, active: !gender.active }
          : { ...gender, active: false }
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGender.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const { toggleActiveGender } = genderSlice.actions;

export const genderReducer = genderSlice.reducer;

export const selectGender = (state: { gender: Gender[] }) => state.gender;

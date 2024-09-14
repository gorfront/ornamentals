import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../../utils/db.json";

export const fetchGender = createAsyncThunk("gender/fetchGender", async () => {
  const response = await db;
  const data = response.genders;

  return data;
});

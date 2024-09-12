import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../../utils/db.json";

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    const response = await db;
    const data = response.categories;

    return data;
  }
);

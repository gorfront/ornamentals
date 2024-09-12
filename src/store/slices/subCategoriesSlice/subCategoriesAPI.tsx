import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../../utils/db.json";

export const fetchSubCategory = createAsyncThunk(
  "subCategories/fetchSubCategory",
  async () => {
    const response = await db;
    const data = response.subcategory;

    return data;
  }
);

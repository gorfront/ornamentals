import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../../utils/db.json";

export const fetchMain = createAsyncThunk("main/fetchMain", async () => {
  const response = await db;
  const data = response.main;

  return data;
});

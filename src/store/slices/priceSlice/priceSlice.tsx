import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRange {
  from: number;
  maxFrom?: number;
  minFrom?: number;
  to: number;
  maxTo?: number;
  minTo?: number;
}

interface PriceState {
  price: PriceRange;
  productionPrice: PriceRange;
  realPrice: PriceRange;
}

const initialState: PriceState = {
  price: {
    from: 1000,
    maxFrom: 2500,
    minFrom: 1000,
    to: 5000,
    maxTo: 5000,
    minTo: 2501,
  },
  productionPrice: {
    from: 1000,
    to: 5000,
  },
  realPrice: {
    from: 1000,
    to: 5000,
  },
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setRealPriceFrom(state, action: PayloadAction<number>) {
      state.realPrice.from = action.payload;
    },
    setRealPriceTo(state, action: PayloadAction<number>) {
      state.realPrice.to = action.payload;
    },

    setProductionPriceFrom(state, action: PayloadAction<number>) {
      state.productionPrice.from = action.payload;
    },
    setProductionPriceTo(state, action: PayloadAction<number>) {
      state.productionPrice.to = action.payload;
    },
  },
});

export const {
  setRealPriceFrom,
  setRealPriceTo,
  setProductionPriceFrom,
  setProductionPriceTo,
} = priceSlice.actions;

export const priceReducer = priceSlice.reducer;

export const selectPrice = (state: { price: PriceState }) => state.price;

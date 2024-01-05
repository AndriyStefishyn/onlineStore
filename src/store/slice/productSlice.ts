import { ProductType } from "./../../types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductSate = {
  values: ProductType[];
};

const initialState: ProductSate = {
  values: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.values.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<ProductType>) => {
      const productToRemove = state.values.findIndex(product => product.id === action.payload.id);
      state.values.splice(productToRemove,1);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;

import { ProductType } from "../../types/productType";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

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
      const productToRemove = state.values.findIndex(
        (product) => product.id === action.payload.id
      );
      state.values.splice(productToRemove, 1);
      /*  state.values= state.values.filter(item=> item.id !== action.payload.id) */
    },
    clearAllProducts: (state) => {
      state.values = [];
    },
  },
});

export const { addProduct, removeProduct, clearAllProducts } =
  productSlice.actions;
export default productSlice.reducer;

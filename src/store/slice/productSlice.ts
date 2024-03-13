import { ProductType } from "./../../types/productType";
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AsyncThunk,
} from "@reduxjs/toolkit";

import { api } from "../../api";

type ProductState = {
  values: ProductType[];
  isLoading: boolean;
  error: string | null;
  products: ProductType[];
  copyOfAllProducts:ProductType[]
};

const initialState: ProductState = {
  values: [],
  isLoading: false,
  error: null,
  products: [],
  copyOfAllProducts:[]
};

const fetchProducts: AsyncThunk<ProductType[], void, { dispatch: any }> =
  createAsyncThunk("product/fetchProducts", async (_, { dispatch }) => {
    try {
      const response = await api.get("/products");
      dispatch(productSlice.actions.allProducts(response.data));
      dispatch(productSlice.actions.copyOfAllProducts(response.data));
      
      return response.data; 
    } catch (error: unknown) {
      console.log("error - ", error);
      dispatch(productSlice.actions.setIsLoading(false));
      throw error; 
    } finally {
      dispatch(productSlice.actions.setIsLoading(false));
    }
  });

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.values.push(action.payload);
    },
    allProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
   copyOfAllProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.copyOfAllProducts = action.payload;
    },
    removeProduct: (state, action: PayloadAction<ProductType>) => {
      state.values = state.values.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearAllProducts: (state) => {
      state.values = [];
    },

    setIsLoading: (state, { payload: isLoading }: PayloadAction<boolean>) => {
      state.isLoading = isLoading;
    },
    
  },
});

export const {
  addProduct,
  removeProduct,
  clearAllProducts,
  setIsLoading,
  allProducts,
  copyOfAllProducts
  
} = productSlice.actions;
export default productSlice.reducer;
export { fetchProducts };

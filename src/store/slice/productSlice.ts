import { ProductType } from './../../types/product';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type ProductSate = {
    values :ProductType[]
}

const initialState:ProductSate = {
 values:[]
};


const productSlice = createSlice ({
    name :'product',
    initialState,
    reducers : {
        addProduct :(state,action:PayloadAction<ProductType>) => {
            state.values.push(action.payload)
        },
        removeProduct :(state,action:PayloadAction<ProductType>) => {
            state.values.pop()
        }
    }
})

export const {addProduct, removeProduct} = productSlice.actions;
export default productSlice.reducer
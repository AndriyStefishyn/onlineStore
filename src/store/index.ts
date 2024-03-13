import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/productSlice';
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer :{
        product:productReducer
    }
})

export const useAppDispatch: () => AppDispatch = useDispatch; 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store
import { useEffect } from "react";
import { LoadingSvg } from "../../svg";
import { Product } from "./Prodcut";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { fetchProducts } from "../../store/slice/productSlice";
export const ProductCarts = () => {
  const { products, isLoading } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch,isLoading]);

  return (
    <div className="overflow-hidden pt-20">
      {isLoading ? <LoadingSvg /> : <Product data={products} />}
    </div>
  );
};

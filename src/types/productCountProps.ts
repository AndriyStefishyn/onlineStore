import { ProductType } from "./productType";

export type ProductCountProps = {
  product: ProductType;
  groupedProducts: ProductType[];
  setGroupedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

import { ProductType } from "./productType";
export type ProductClickStateType = {
  wasClicked: boolean;
  product: ProductType | null;
};
import { NavBar } from "../../components/NavBar";
import { ProductCarts } from "../../components/ProductCards/ProductCards";
import { Basket } from "../../components/Basket";
export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Basket />
      <ProductCarts />
    </>
  );
};

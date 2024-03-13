import { NavBar } from "../../components/NavBar";
import { ProductCarts } from "../../components/ProductCards/ProductCards";
import { Basket } from "../../components/Basket";
import { SearchInput } from "../../components/Input/SearchInput";
export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Basket />
      <SearchInput />
      <ProductCarts />
    </>
  );
};

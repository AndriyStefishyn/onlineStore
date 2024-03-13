import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { SearchRersult } from "./SearchResult/SearchResult";
import { SearchSvg } from "../../svg";
export const SearchInput = () => {
  const [searchingValue, setSearchingValue] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const copyOfAllProducts = useSelector(
    (state: RootState) => state.product.copyOfAllProducts
  );
  const searchProduct = products.filter((product) => {
    return product.title.toLowerCase().includes(searchingValue.toLowerCase());
  });

  return (
    <div className="absolute left-[25%]  w-1/2">
      <div className="flex justify-center p-3 gap-4 shadow rounded-lg cursor-pointer ">
        <SearchSvg />
        <input
          type="text"
          value={searchingValue}
          onChange={(e) => setSearchingValue(e.target.value)}
          placeholder="Searching..."
          className=" outline-none text-lg text-light-brown placeholder-light-brown"
        />
      </div>
      {searchingValue && <SearchRersult product={searchProduct} />}
    </div>
  );
};

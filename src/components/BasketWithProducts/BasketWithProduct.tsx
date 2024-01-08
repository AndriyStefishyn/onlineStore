import { ProductType } from "../../types";
import { BasketSvg, CloseSvg } from "../../svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  clearAllProducts,
  removeProduct,
} from "../../store/slice/productSlice";
import { RemoveSvg } from "../../svg/RemoveSvg";
import { EmptyBasketSvg } from "../../svg/EmptyBasketSvg";
type BasketProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const BasketWithProducts: React.FC<BasketProps> = ({
  setIsOpen,
  isOpen,
}) => {
  const dispatch = useDispatch();
  const [gruopedProducts, setGroupedProducts] = useState<ProductType[]>([]);
  const selectedProduct = useSelector(
    (state: RootState) => state.product.values
  );
  useEffect(() => {
    const productsMap: { [key: number]: number } = {};
    selectedProduct.forEach((product) => {
      if (!productsMap[product.id]) {
        productsMap[product.id] = 1;
      } else {
        productsMap[product.id] += 1;
      }
    });
    const usedProductsIds: Array<number> = [];
    const newGroupedProducts = selectedProduct
      .map((product) => {
        const countOfProducts = productsMap[product.id];
        return {
          ...product,
          price: product.price * countOfProducts,
          count: countOfProducts > 1 ? ` x${countOfProducts} ` : "",
        };
      })
      .filter((product) => {
        if (usedProductsIds.includes(product.id)) {
          return false;
        }
        usedProductsIds.push(product.id);
        return true;
      });
    setGroupedProducts(newGroupedProducts);
  }, [selectedProduct]);
  const handleClick = () => {
    localStorage.setItem("order", JSON.stringify(selectedProduct));
    dispatch(clearAllProducts());
  };

  const deleteProduct = (product: ProductType) => {
    dispatch(removeProduct(product));
  };

  const closeBtn = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="w-screen h-screen absolute top-0 right-0 bg-blue-200 p-5 rounded-md overflow-y-auto">
      <button onClick={closeBtn} className="w-full flex justify-end">
        <CloseSvg />
      </button>
      {gruopedProducts.length ? (
        <ul className="text-center">
          {gruopedProducts.map((product, i) => (
            <li
              key={product.id}
              className=" text-center  flex justify-between items-center gap-3 mt-4 py-5 px-6 rounded-lg border border-solid border-gray-400"
            >
              <div>
                <img src={product.image} alt="product" className="w-10 h-10" />
                <label htmlFor="product">{product.title}</label>
              </div>

              <div>
                <span className="text-red-500 text-lg">{product.count}</span>
              </div>
              <div>
                <button onClick={() => deleteProduct(product)}>
                  <RemoveSvg />
                </button>
                <p className="font-bold">${product.price}</p>
              </div>
            </li>
          ))}
          <div className="text-center">
            <button
              onClick={handleClick}
              className="bg-blue-400 text-[25px] p-3 my-5 mx-auto rounded-md  text-white w-40 flex justify-center gap-4 items-center"
            >
              <BasketSvg width={25} height={25} />
              BUY
            </button>
          </div>
        </ul>
      ) : (
        <div className="overflow-y-hidden flex flex-col justify-center items-center">
          <EmptyBasketSvg />
          <p className="text-xl">Nothing selected</p>
        </div>
      )}
    </div>
  );
};

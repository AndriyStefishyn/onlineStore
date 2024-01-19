import { ProductType, BasketPropsType } from "../../types";
import { BasketSvg, CloseSvg, EmptyBasketSvg, RemoveSvg } from "../../svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  clearAllProducts,
  removeProduct,
} from "../../store/slice/productSlice";
import { usePreventYScroll } from "../../hooks/usePerventYScroll";
import { ProductCount } from "./ProductCount";
export const BasketWithProducts: React.FC<BasketPropsType> = ({
  setIsOpen,
  isOpen,
}) => {
  const dispatch = useDispatch();
  const [groupedProducts, setGroupedProducts] = useState<ProductType[]>([]);
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
          count: countOfProducts >= 1 ? countOfProducts : 0,
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

  const totalPrice = () => {
    let sum = 0;
    groupedProducts.forEach((product) => {
      if (product.count) {
        sum += product.price * product.count;
      }
    });
    return sum.toFixed(2);
  };
  const handleClick = () => {
    localStorage.setItem("order", JSON.stringify(selectedProduct));
    dispatch(clearAllProducts());
  };

  const deleteProduct = (product: ProductType) => {
    dispatch(removeProduct(product));

  };

  usePreventYScroll(isOpen);

  const closeBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-screen h-screen absolute top-0 right-0 bg-blue-200 p-5 rounded-md overflow-auto animate__animated ${
        isOpen
          ? "animate__slideInRight animate__faster"
          : "animate__backOutRight animate-faster"
      }`}
    >
      <button onClick={closeBtn} className="w-full flex justify-end">
        <CloseSvg />
      </button>
      {groupedProducts.length ? (
        <ul className="text-center overflow-hidden">
          {groupedProducts.map((product) => (
            <li
              key={product.id}
              className="text-left bg-white  flex justify-between items-center gap-3 mt-4 py-5 px-6 rounded-lg shadow-xl "
            >
              <div className="flex gap-10">
                <img src={product.image} alt="product" className="w-20 h-20" />
                <div>
                  <p className="text-lg font-bold">{product.title}</p>
                  <p>{product.category}</p>
                  <ProductCount
                    product={product}
                    groupedProducts={groupedProducts}
                    setGroupedProducts={setGroupedProducts}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="font-bold">${product.count?product.price*product.count:product.price}</p>
                <button
                  onClick={() => deleteProduct(product)}
                  className="hover:scale-110"
                >
                  <RemoveSvg />
                </button>
              </div>
            </li>
          ))}
          <div className="text-center">
            <button
              onClick={handleClick}
              className="bg-blue-400 text-[25px] p-3 my-5 mx-auto rounded-md  text-white w-40 flex justify-center gap-4 items-center hover:bg-blue-"
            >
              <BasketSvg width={25} height={25} />
              BUY
            </button>
          </div>
          <p className="font-bold text-xl">Total Price: ${totalPrice()}</p>
        </ul>
      ) : (
        <div className="overflow-hidden flex flex-col justify-center items-center mt-28 animate-pulse">
          <EmptyBasketSvg />
          <p className="text-xl">Nothing selected</p>
        </div>
      )}
    </div>
  );
};

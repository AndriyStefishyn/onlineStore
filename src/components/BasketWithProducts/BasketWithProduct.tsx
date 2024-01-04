import { ProductType } from "../../types";
import { CloseSvg } from "../../svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type BasketProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const BasketWithProducts: React.FC<BasketProps> = ({
  setIsOpen,
  isOpen,
}) => {
  const [gruopedProducts, setGroupedProducts] = useState<ProductType[]>([]);
const selectedProduct = useSelector((state:RootState)=>state.product.values)
  useEffect(() => {
    const productsMap: { [key: number]: number } = {};
    selectedProduct.forEach((product) => {
      if (!productsMap[product.id]) {
        productsMap[product.id] = 1;
      } else {
        productsMap[product.id] += 1;
      }
    });
    console.log(productsMap);
    const usedProductsIds: Array<number> = [];
    const newGroupedProducts = selectedProduct
      .map((product) => {
        const countOfProducts = productsMap[product.id];
        return {
          ...product,
          price: product.price * countOfProducts,
          count: countOfProducts > 1 ? `(${countOfProducts})` : "",
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
  const handleClick = () => {};

  return (
    <div
      className={`h-screen absolute top-0 right-0 bg-blue-200 p-5 rounded-md overflow-y-scroll transition-w duration-500 ease-in-out ${
        isOpen ? "w-[400px]" : "w-0"
      }`}
    >
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="w-full flex justify-end"
      >
        <CloseSvg />
      </button>
      {gruopedProducts.length ? (
        <ul>
          {gruopedProducts.map((product, i) => (
            <li
              key={product.id}
              className="text-center flex justify-between items-center gap-3 py-5 px-6"
            >
              <img src={product.image} alt="product" className="w-10 h-10" />

              <p>
                {product.count}
                {product.title}
              </p>
              <p>${product.price}</p>
            </li>
          ))}
          <button onClick={handleClick}>Order</button>
        </ul>
      ) : (
        <div className="text-white flex justify-center">Nothing selected</div>
      )}
    </div>
  );
};

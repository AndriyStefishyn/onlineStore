import { ProductType,ProductClickStateType } from "../../types";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slice/productSlice";
import { useState } from "react";
import { ZoomedCard } from "./ZoomedCard";
import { usePreventYScroll } from "../../hooks/usePerventYScroll";


export const Product: React.FC<{ data: ProductType[] }> = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = (item: ProductType) => {
    dispatch(addProduct(item));
  };

  const [productWasClicked, setProductWasClicked] = useState<ProductClickStateType>(
    {
      wasClicked: false,
      product: null,
    }
  );

 usePreventYScroll(productWasClicked.wasClicked)

  return (
    <ul className="grid grid-cols-4 gap-5 px-28 overflow-hidden">
      {data.map((item) => (
        <li
          key={item.id}
          className="border-2 border-gray-300 rounded-md overflow-y-hidden p-5 flex flex-col justify-between items-center"
        >
          <div
            className="h-[50%]"
            onClick={() =>
              setProductWasClicked({
                wasClicked: !productWasClicked.wasClicked,
                product: item,
              })
            }
          >
            <img
              src={item.image}
              alt="product"
              className="object-contain h-full mb-10 cursor-zoom-in"
            />
          </div>
          <div className="w-full">
            <p>{item.title}</p>
            <p className="font-bold">${item.price}</p>
            <p>{item.category}</p>
            <button
              onClick={() => handleClick(item)}
              className="bg-blue-400 p-2 font-bold rounded-md mt-5 w-full cursor-pointer text-white"
            >
              Add to cart
            </button>
          </div>
        </li>
      ))}
      {productWasClicked.wasClicked && productWasClicked.product && (
        <ZoomedCard
          selectedCard={productWasClicked}
          onClose={() =>
            setProductWasClicked({ wasClicked: false, product: null })
          }
        />
      )}
    </ul>
  );
};

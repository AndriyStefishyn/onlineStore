import { ProductType, ProductClickStateType } from "../../types";
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

  const [productState, setProductState] = useState<ProductClickStateType>({
    wasClicked: false,
    product: null,
  });

  usePreventYScroll(productState.wasClicked);

  return (
    <ul className="grid grid-cols-4 gap-5 px-28 mb-24 ">
      {data.map((item, id) => (
        <li
          key={id}
          className="  p-5 mt-2 flex flex-col justify-between items-center shadow-2xl rounded-lg transition-transform duration-1 "
        >
          <div
            className="h-[50%]"
            onClick={() =>
              setProductState({
                wasClicked: !productState.wasClicked,
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
          <div className="w-full text-light-brown">
            <p>{item.title}</p>
            <p className="font-bold">${item.price}</p>
            <p>{item.category}</p>
            <button
              onClick={() => handleClick(item)}
              className="bg-light-brown  p-2 font-bold rounded-md mt-5 w-full cursor-pointer text-white"
            >
              Add to cart
            </button>
          </div>
        </li>
      ))}
      {productState.wasClicked && productState.product && (
        <ZoomedCard
          selectedCard={productState}
          onClose={() => setProductState({ wasClicked: false, product: null })}
        />
      )}
    </ul>
  );
};

export {}
/* import { ProductType } from "../../../types";
import { useEffect } from "react";

type ProductProps = {
  props: ProductType;
  selectedProduct: ProductType[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

export const Product: React.FC<ProductProps> = ({
  props,
  selectedProduct,
  setSelectedProduct,
}) => {
  const { id, image, title, price, category } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedProduct((prevProducts) => [...prevProducts, props]);
   
  };

useEffect (()=>{
localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
console.log(localStorage.getItem("selectedProduct")?.toString());
},[selectedProduct])

  return (
    <li
      key={id}
      className=" border-2 border-gray-300 rounded-md overflow-y-hidden p-5 flex flex-col justify-between items-center"
    >
      <div className=" h-[50%]">
        <img
          src={image}
          alt="product"
          className=" object-contain  h-full mb-10"
        />
      </div>

      <div className="w-full">
        <p>{title}</p>
        <p className="font-bold">${price}</p>
        <p>{category}</p>
        <button
          onClick={handleClick}
          className="bg-gray-400 p-2 font-bold rounded-md mt-5 w-full"
        >
          Add to cart
        </button>
      </div>
    </li>
  );
};
 */
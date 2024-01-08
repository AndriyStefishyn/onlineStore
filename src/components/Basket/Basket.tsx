import { BasketSvg } from "../../svg/BasketSvg";
import { useState } from "react";
import { BasketWithProducts } from "../BasketWithProducts/BasketWithProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../store";



export const Basket = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
    
  };

  const selectedProduct = useSelector((state:RootState) => state.product.values)
  return (
    <div className=" flex justify-end sticky top-0 p-6 ">
      <span className="block w-6 h-6 bg-black text-center text-white rounded-md">
        {selectedProduct.length}
      </span>
      <div onClick={handleClick}>
        <BasketSvg
          width={50}
          height={50}
          className="border-2 border-lightgray rounded-md p-1"
        />
      </div>

      {isOpen && <BasketWithProducts setIsOpen={setIsOpen} isOpen={isOpen} />}
    </div>
  );
};

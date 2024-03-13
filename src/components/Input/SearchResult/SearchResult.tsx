import { ProductType } from "../../../types";
export const SearchRersult: React.FC<{ product: ProductType[] }> = ({
  product,
}) => {
  return (
    <ul className="z-40 overflow-y-auto max-h-[300px] bg-white rounded-xl p-2 mt-5 flex flex-col items-center justify-center shadow-lg">
      {product.map((item) => (
        <li className=" hover:bg-neutral-200 w-full text-center text-light-brown p-2 rounded-md cursor-pointer">
          {item.title}
        </li>
      ))}
    </ul>
  );
};

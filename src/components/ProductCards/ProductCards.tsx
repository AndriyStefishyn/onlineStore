import { useState, useEffect } from "react";
import { ProductType } from "../../types";
import { api } from "../../api";
import { LoadingSvg } from "../../svg";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slice/productSlice";
export const ProductCarts = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleClick = (item: ProductType) => {
    dispatch(addProduct(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingSvg />
      ) : (
        <>
          
          <ul className="grid grid-cols-4 gap-5 px-28">
            {data.map((item) => (
              <li
                key={item.id}
                className=" border-2 border-gray-300 rounded-md overflow-y-hidden p-5 flex flex-col justify-between items-center"
              >
                <div className=" h-[50%]">
                  <img
                    src={item.image}
                    alt="product"
                    className=" object-contain  h-full mb-10"
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
          </ul>
        </>
      )}
    </div>
  );
};

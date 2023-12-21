import { useState, useEffect } from "react";
import { ProductType } from "../../types";
import { api } from "../../api";
import { LoadingSvg } from "../../svg";
import { Product } from "./Product";
export const ProductCarts = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products");
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingSvg className="w-screen h h-screen flex justify-center items-center" />
      ) : (
        <ul className="grid grid-cols-4 gap-5 px-10 my-10">
            {
              data.map((item) => <Product props={item} />)  
            }
        </ul>
      )}
    </>
  );
};

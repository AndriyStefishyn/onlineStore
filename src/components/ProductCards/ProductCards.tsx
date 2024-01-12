import { useState, useEffect } from "react";
import { ProductType } from "../../types";
import { api } from "../../api";
import { LoadingSvg } from "../../svg";
import { Product } from "./Prodcut";

export const ProductCarts = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

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
  return <div className="overflow-hidden pt-20">{loading ? <LoadingSvg /> : <Product data={data} />}</div>;
};

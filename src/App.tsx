import React, { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api";
import { NavBar } from "./components/Menu";



function App() {
  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
  };
  const [data, setData] = useState<Product[]>([]);
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
        console.log(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
    
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className=" grid grid-cols-4 gap-5 px-10 my-10">
            {data.map((item) => (
              <li
                key={item.id}
                className=" border-2 border-gray-300 rounded-md overflow-y-auto p-5 flex flex-col items-center justify-between"
              >
                <div className="w-full h-[60%]">
                  <img
                  src={item.image}
                  alt="product"
                  className=" object-contain w-full h-full mb-10"
                />
                </div>
                
                <div>
                  <p>{item.title}</p>
                  <p className="font-bold">${item.price}</p>
                  <p className="text-justify">{item.description}</p>
                  <button className="bg-gray-400 p-2 font-bold rounded-md mt-5 w-full">
                    Add to cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
  
    </div>
  );
}

export default App;

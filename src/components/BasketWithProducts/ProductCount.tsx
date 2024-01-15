import { ProductCountProps } from "../../types";

export const ProductCount: React.FC<ProductCountProps> = ({
  product,
  groupedProducts,
  setGroupedProducts,
}) => {
  const updateProduct = (productId: number, newCount: number | undefined) => {
    const updatedProductsCount = groupedProducts.map((product) =>
      product.id === productId ? { ...product, count: newCount } : product
    );
    setGroupedProducts(updatedProductsCount);
  };
  return (
    <div className="text-xl">
      <span>Amount : </span>
      <button
        className=" w-7 text-2xl"
        onClick={() =>
          updateProduct(
            product.id,
            typeof product.count === "number" && product.count > 0
              ? product.count - 1
              : 0
          )
        }
      >
        -
      </button>
      <span className="w-9 inline-block text-center text-blue-500 bg-blue-200 py-1  rounded-md text-2xl  select-none">
        {product.count}
      </span>
      <button
        className=" w-7 text-2xl"
        onClick={() =>
          updateProduct(
            product.id,
            typeof product.count === "number" ? product.count + 1 : 0
          )
        }
      >
        +
      </button>
    </div>
  );
};

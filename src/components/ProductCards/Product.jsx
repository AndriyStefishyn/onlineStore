
export const Product = ({props}) => {
const {id,image,title,price,category} = props;
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
          <button className="bg-gray-400 p-2 font-bold rounded-md mt-5 w-full">
            Add to cart
          </button>
        </div>
      </li>
    );
}
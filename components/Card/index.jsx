import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/Lib/client";
import { HeartIcon as HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";

const Card = ({ product }) => {
  const [add, setAdd] = React.useState(false);

  const { onAdd, onRemove } = useStateContext();

  const onAddClick = () => {
    onAdd(product, 1);
    setAdd(true);
  };

  const onRemoveClick = () => {
    onRemove(product._id);
    setAdd(false);
  };

  return (
    <div className="p-2.5 shadow-lg rounded-xl">
      <Link
        onClick={() => toast("Loading...")}
        href={`/goods/${product.slug.current}`}
      >
        <div className="h-60 overflow-hidden select-none w-full rounded-xl">
          <img
            src={urlFor(product.image && product.image[0])}
            alt={product.name}
            className="h-60 object-cover w-full duration-200 ease-in-out hover:scale-110"
          />
        </div>
        <h3 className="mb-0 mt-3 text-left font-semibold text-[17px]">
          {product.name}
        </h3>
      </Link>
      <div className="flex pt-2.5 text-left justify-between">
        <div>
          <p className="font-medium text-sm text-gray-400 m-0">Price:</p>
          <p className="font-medium text-sm mt-1">${product.price}</p>
        </div>
        {!add ? (
          <HeartIcon
             
            onClick={onAddClick}
            width={20}
            className="mr-4 hover:text-pink-500 ease-in-out duration-200 hover:scale-125 cursor-pointer"
          />
        ) : (
          <SolidHeartIcon
             
            onClick={onRemoveClick}
            width={20}
            className="mr-4 hover:text-pink-500 ease-in-out duration-200 hover:scale-125 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { urlFor } from "@/Lib/client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";

const CartItem = ({ image, name, price, quantity, slug, _id }) => {
  const {toggleCartItemQuantity, onRemove} = useStateContext();

  return (
    <div className="grid grid-cols-3 rounded-xl shadow-lg my-3 bg-white p-3 relative">
      <Link href={`/goods/${slug.current}`}>
        <img
          src={urlFor(image[0])}
          alt={name}
          className="object-cover rounded-xl w-20 h-20 col-span-1 mr-1"
        />
      </Link>
      <div className="block col-span-2">
        <Link href={`/goods/${slug.current}`}>
          <p className="text-base pr-2">
            {name}
          </p>
        </Link>
        <div className="flex pr-2 items-center justify-between">
          <p className="font-semibold">${price * quantity}</p>
          <div className="flex p-1  mr-3 rounded-xl border">
            <button className="px-3"   onClick={() => toggleCartItemQuantity(_id, 'dec')}>
              -
            </button>
            <p>{quantity}</p>
            <button className="px-3"   onClick={() => toggleCartItemQuantity(_id, 'inc')}>
              +
            </button>
          </div>
        </div>
        <button   className="absolute top-0 right-0 m-2" onClick={() => onRemove(_id)}>
          <XMarkIcon
            width={20}
            className="hover:text-red-500 ease-in-out duration-150 hover:scale-125"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

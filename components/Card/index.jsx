import { urlFor } from "@/Lib/client";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Card = ({image, name, price, slug}) => {
  return (
    <div className="p-2.5 shadow-lg rounded-xl">
      <Link href={`/goods/${slug.current}`}>
        <div className="h-50 overflow-hidden select-none w-full rounded-xl">
          <img
            src={urlFor(image && image[0])}
            alt={name}
            className="h-50 object-cover w-full duration-200 ease-in-out hover:scale-110"
          />
        </div>
        <h3 className="mb-0 mt-3 text-left font-semibold text-[17px]">
          {name}
        </h3>
      </Link>
      <div className="flex pt-2.5 text-left justify-between">
        <div>
            <p className="font-medium text-sm text-gray-400 m-0">Price:</p>
            <p className="font-medium text-sm mt-1">${price}</p>
        </div>
        <HeartIcon width={20} className="mr-4 hover:text-pink-500 ease-in-out duration-200 hover:scale-125 cursor-pointer"/>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="backdrop-blur-xl bg-white bg-opacity-80 border-b-gray-300 border-b flex items-center 
    justify-between py-5 px-12 sticky top-0 z-50"
    >
      <div className="h-10 items-center grid">
        <Link href="/">
          <h1 className="text-xl font-medium leading-4">AVILA</h1>
        </Link>
        <p className="text-[13px] font-normal text-gray-300">
          Интернет магазин одежды
        </p>
      </div>
      <div className="border border-gray-300 py-2 w-1/4 flex justify-between">
        <input
          placeholder="Поиск по товарам"
          type="text"
          className="border-none outline-none text-xs px-2 font-light bg-transparent"
        />
        <XMarkIcon
          width={22}
          className="text-gray-400 mx-2 hover:text-pink-500 hover:scale-110 transition ease-in-out cursor-pointer"
        />
      </div>
      <div className="relative h-10 items-center flex cursor-pointer hover:scale-110 ease-in-out duration-100">
        <ShoppingBagIcon width={30} className="z-10" />
        <div className="rounded-full bg-red-500 text-white absolute bottom-0 right-0 px-1 z-20 text-sm">
          1
        </div>
      </div>
    </div>
  );
};

export default Header;

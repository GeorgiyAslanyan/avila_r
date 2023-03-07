import React from "react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import Cart from "@/components/Cart";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const {
    showCart,
    setShowCart,
    totalQuantities,
    setShowCategories,
    showCategories,
  } = useStateContext();

  const onCategoryMenu = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <div
      className="md:backdrop-blur-xl bg-white md:bg-opacity-80 md:border-b-gray-300 md:border-b flex items-center 
    justify-between py-5 px-8 sticky top-0 z-50 presm:px-12"
    >
      <div className="h-10 items-center grid">
        <Link href="/">
          <h1 className="text-xl font-medium leading-4">AVILA</h1>
        </Link>
        <p className="text-[13px] font-normal text-gray-500">
          Delightful culinary experience
        </p>
      </div>
      <div className={`${showCart && "hidden"}  flex`}>
        <div
          className={`relative h-10 items-center flex cursor-pointer hover:scale-110 ease-in-out duration-100 mr-5`}
          onClick={() => setShowCart(true)}
        >
          <ShoppingBagIcon width={30} className="z-10" />
          <div className="rounded-full bg-red-500 text-white absolute bottom-0 right-0 px-1 z-20 text-sm">
            {totalQuantities}
          </div>
        </div>
        {router.pathname !== "/goods/[slug]" &&
          router.pathname !== "/uccess" &&
          router.pathname !== "/canceled" && (
            <div
              onClick={onCategoryMenu}
              type="button"
              className="md:hidden flex h-10 items-center cursor-pointer"
            >
              {showCategories ? (
                <XMarkIcon width={30} />
              ) : (
                <Bars3Icon width={30} />
              )}
            </div>
          )}
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Header;

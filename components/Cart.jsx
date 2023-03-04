import React from "react";
import { useStateContext } from "@/context/StateContext";
import { ChevronLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import CartItem from "@/components/CartItem";

const Cart = () => {
  const cartRef = React.useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div ref={cartRef}>
      <div className="w-full absolute top-0 left-0 h-[100vh] grid grid-cols-3">
        <div
          className="bg-black bg-opacity-30 z-10 col-span-2"
          onClick={() => setShowCart(false)}
        />
        <div className="z-20 col-span-1 bg-white p-10">
          <button
            type="button"
            onClick={() => setShowCart(false)}
            className="flex items-center"
          >
            <ChevronLeftIcon width={20} />
            <span className="text-xl ml-3">Your cart</span>
            <span className="text-red-500 text-xl ml-4">
              ({totalQuantities} items)
            </span>
          </button>
          {cartItems.length >= 1 ? (
            <div>
              {cartItems.map((item, i) => (
                <CartItem {...item} key={item._id} />
              ))}
              <div>

              </div>
            </div>
          ) : (
            <div className="place-content-center justify-items-center h-[80%] grid my-10">
              <ShoppingBagIcon width={100} />
              <h3>Your shopping bag is empty</h3>
              <button className="rounded-xl px-5 py-2 mt-3 hover:scale-110 ease-in-out duration-200 bg-red-500 text-white w-full" type="button" onClick={() => setShowCart(false)}>
                Continue shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

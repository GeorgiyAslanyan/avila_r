import React from "react";
import { useStateContext } from "@/context/StateContext";
import { ChevronLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import CartItem from "@/components/CartItem";
import getStripe from "@/Lib/getStripe";
import axios from "axios";
import { toast } from "react-hot-toast";

const Cart = () => {
  const cartRef = React.useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({sessionId: data.id });
  };

  return (
    <div ref={cartRef}>
      <div className="w-full absolute top-0 left-0 h-[100vh] grid grid-cols-3">
        <div
          className="bg-black bg-opacity-30 z-10 col-span-2"
          onClick={() => setShowCart(false)}
        />
        <div className="z-20 col-span-1 bg-white p-10 relative">
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
            <div className="">
              {cartItems.map((item, i) => (
                <CartItem {...item} key={item._id} />
              ))}
              <div className=" absolute grid bottom-5 w-[85%] gap-2">
                <div className="flex w-full justify-between">
                  <h3 className="font-semibold">Subtotal:</h3>
                  <h3 className="font-semibold">${totalPrice}</h3>
                </div>
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="bg-red-500 text-white w-full rounded-xl py-2 uppercase"
                >
                  Pay with Stripe
                </button>
              </div>
            </div>
          ) : (
            <div className="place-content-center justify-items-center h-[80%] grid my-10">
              <ShoppingBagIcon width={100} />
              <h3>Your shopping bag is empty</h3>
              <button
                className="rounded-xl px-5 py-2 mt-3 hover:scale-110 ease-in-out duration-200 bg-red-500 text-white w-full"
                type="button"
                onClick={() => setShowCart(false)}
              >
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

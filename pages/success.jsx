import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="w-1/3 mx-auto">
      <div className="w-96 mx-auto">
        <img src="/success.webp" alt="succes" className=""/>
      </div>
      <Link href={"/"}>
        <div>
          <button
            className="rounded-xl px-5 py-2 mt-3 hover:scale-110 ease-in-out duration-200 bg-red-500 text-white w-full"
             
          >
            Continue shopping
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Success;

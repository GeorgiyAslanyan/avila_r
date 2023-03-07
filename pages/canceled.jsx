import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="w-full lg:w-1/3 mx-auto">
      <div className="w-4/5 lg:w-96 presm:w-72 mx-auto">
        <img src="/canceled.webp" alt="cancel" className="p-10"/>
      </div>
      <Link href={"/"}>
        <div className="w-4/5 lg:w-96 presm:w-72 mx-auto">
          <button
            className="rounded-xl px-5 py-2 w-full mt-3 hover:scale-110 ease-in-out duration-200 bg-red-500 text-white"
             
          >
            Back to shopping
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Success;

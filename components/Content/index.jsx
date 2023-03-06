import React from "react";
import Card from "../Card";
import { urlFor } from "@/Lib/client";

const Content = ({ products, banner }) => {

  return (
    <div className="lg:mr-10 m-5 md:mr-5 xl:col-span-5 lg:col-span-4 md:col-span-3 col-span-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 presm:grid-cols-2 gap-5">
        {products?.map((el) => (
          <Card product={el} key={el._id} />
        ))}
      </div>
    </div>
  );
};

export default Content;

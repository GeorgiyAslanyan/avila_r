import React from "react";
import Card from "../Card";
import { urlFor } from "@/Lib/client";

const Content = ({ products, banner }) => {

  return (
    <div className="col-span-5">
      {/* <div className="w-full">
        <img src={urlFor(banner[0].image && banner[0].image)} alt="banner" />
        {banner.desc}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {products?.map((el) => (
          <Card {...el} key={el._id} />
        ))}
      </div>
    </div>
  );
};

export default Content;

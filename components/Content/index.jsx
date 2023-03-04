import React from "react";
import Card from "../Card";

const Content = ({ products, banner }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
      {products?.map((el) => (
        <Card {...el} key={el._id} />
      ))}
    </div>
  );
};


export default Content;

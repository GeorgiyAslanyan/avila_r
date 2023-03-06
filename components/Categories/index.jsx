import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/Lib/client";
import Link from "next/link";
import React from "react";
import s from "./Categories.module.scss";

const Categories = ({ categories }) => {
  const { setShowCategories, showCategories } = useStateContext();

  return (
    <div
      className={`${
        !showCategories && "translate-y-[-300px]"
      } duration-300 ease-in-out grid md:grid-cols-1 w-full md:w-auto sm:grid-cols-4 grid-cols-2 presm:grid-cols-3  col-span-1 
      fixed pl-5 mr-5 md:translate-y-[0] bg-white md:mt-5`}
    >
      {categories.map((category) => (
        <Link
          className={s.categoriesLink}
          key={category._id}
          href={`/category/${category.slug.current}`}
        >
          <div className="rounded-xl flex items-center mb-2 h-14">
            <img
              className="w-10 h-10 cover drop-shadow-lg"
              src={urlFor(category.image && category.image)}
              alt={category.title}
            />
            <h2 className="font-semibold pl-2">{category.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

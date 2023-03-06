import { urlFor } from "@/Lib/client";
import Link from "next/link";
import React from "react";
import s from './Categories.module.scss'

const Categories = ({ categories }) => {
  return (
    <div className={s.categories}>
      {categories.map((category) => (
        <Link key={category._id} href={`/category/${category.slug.current}`}>
          <div className="rounded-xl  flex items-center mb-3 h-14">
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

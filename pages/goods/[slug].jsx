import React from "react";
import { urlFor, client } from "@/Lib/client";
import Card from "@/components/Card";
import {useStateContext} from '@/context/StateContext'

const GoodsDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = React.useState(0);
  const {decQty, incQty, qty, size, setSize, onAdd} = useStateContext()


  return (
    <>
      <div className="grid grid-cols-2">
        <div className="my-0 mx-auto px-5 pt-5 relative">
          <img
            src={urlFor(image && image[index])}
            alt=""
            className="h-[395px] object-cover w-[500px] rounded-xl"
          />
          <div className="grid grid-cols-4 w-[500px]">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                alt=""
                onMouseEnter={() => setIndex(i)}
                className={`cursor-pointer ${
                  i === index ? "grayscale-0" : "grayscale"
                } hover:grayscale-0 h-[84px] mt-2.5 mb-5 object-cover w-full`}
              />
            ))}
          </div>
        </div>
        <div className="text-left w-3/4 pt-5">
          <h1 className="font-bold text-4xl">{name}</h1>
          <p className="my-4">{details}</p>
          <div className="grid grid-cols-4 gap-2.5">
            {["xs", "s", "m", "l", "xl", "XXl", "XXXl", "4xl"].map((el, i) => (
              <button
                key={el}
                onClick={() => setSize(i)}
                className={`cursor-pointer font-semibold outline-none p-2.5 uppercase ${
                  size === i ? "bg-red-600 text-white" : "bg-white"
                } shadow-lg rounded-xl border`}
              >
                {el}
              </button>
            ))}
          </div>
          <div className="flex mt-3">
            <div className="flex p-2  mr-3 shadow-lg rounded-xl border mb-2.5">
              <button
                className="px-3"
                type="button"
                onClick={decQty}
              >
                -
              </button>
              <p>{qty}</p>
              <button
                className="px-3"
                type="button"
                onClick={incQty}
              >
                +
              </button>
            </div>
            <h2 className="my-0 font-bold text-[1.5rem]">
              {price * qty} руб.
            </h2>
          </div>

          <div className="grid gap-8 grid-cols-2">
            <button className="p-2.5 shadow-lg rounded-xl border" type="button" onClick={() => onAdd(product, qty)}>
              Add to cart
            </button>
            <button
              className="p-2.5 shadow-lg rounded-xl bg-red-600 text-white border"
              type="button"
            >
              Byu Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Recomendations</h2>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {products.map((el) => (
              <Card {...el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;
  const product = await client.fetch(productQuery);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default GoodsDetails;

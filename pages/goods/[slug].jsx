import React from "react";
import { urlFor, client } from "@/Lib/client";
import Card from "@/components/Card";
import {useStateContext} from '@/context/StateContext'
import { toast } from "react-hot-toast";

const GoodsDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = React.useState(0);
  const {decQty, incQty, qty, size, setSize, onAdd, setShowCart} = useStateContext()


  return (
    <>
      <div className="grid md:grid-cols-2 pb-2.5">
        <div className="my-0 mx-auto md:pr-5 md:pt-5 relative">
          <img
            src={urlFor(image && image[index])}
            alt=""
            className="md:h-[395px] h-[300px] object-cover md:w-[500px] w-[768px] md:rounded-xl"
          />
        </div>
        <div className="text-left w-full lg:w-3/4 pt-5 md:pr-5 px-5 md:pl-0">
          <h1 className="font-bold text-4xl">{name}</h1>
          <p className="my-4">{details}</p>
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
              ${price * qty}
            </h2>
          </div>

          <div className="grid presm:gap-8 gap-4 presm:grid-cols-2">
            <button className="p-2.5 shadow-lg rounded-xl border" type="button" onClick={() => onAdd(product, qty)}>
              Add to cart
            </button>
            <button
              className="p-2.5 shadow-lg rounded-xl bg-red-600 text-white border"
              type="button"
              onClick={() => setShowCart(true)}
            >
              Byu Now
            </button>
          </div>
        </div>
      </div>
      <div className=" md:mx-5 mb-5">
        <h2 className="font-bold text-left ml-5 text-xl my-5">Recomendations</h2>
        <div>
          <div className="grid grid-cols-1 presm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {products.map((el) => (
              <Card product={el} key={el._id} />
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
  const product = await client.fetch(productQuery);

  const productsQuery = `*[_type == "product" && category[0]._ref == "${product.category[0]._ref}"] [0...5]`;
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default GoodsDetails;

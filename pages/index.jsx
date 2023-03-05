import Head from "next/head";
import Header from "@/components/Header";
import Content from "@/components/Content";
import { client } from "@/Lib/client";

export default function Home({ products, banner }) {
  return (
    <>
      <div className="mx-10 my-5">
        <Content products={products} banner={banner}/>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner },
  };
}

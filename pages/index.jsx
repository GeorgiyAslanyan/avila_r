import Head from "next/head";
import Header from "@/components/Header";
import Content from "@/components/Content";
import { client } from "@/Lib/client";

export default function Home({ products }) {
  return (
    <>
      <div className="mx-10 my-5">
        <Content products={products} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  return {
    props: { products },
  };
}

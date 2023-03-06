import Content from "@/components/Content";
import { client } from "@/Lib/client";
import Categories from "@/components/Categories";

export default function Home({ products, categories }) {
  return (
    <>
      <div className="grid grid-cols-4 xl:grid-cols-6 lg:grid-cols-5 ">
        <Categories categories={categories}/>
        <div className="hidden md:block"/>
        <Content products={products} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const categoriesQuery = `*[_type == "category"]`;
  const categories = await client.fetch(categoriesQuery);

  return {
    props: { products, categories },
  };
}

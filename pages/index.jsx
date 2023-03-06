import Content from "@/components/Content";
import { client } from "@/Lib/client";
import Categories from "@/components/Categories";

export default function Home({ products, categories }) {
  return (
    <>
      <div className="mx-10 my-5 grid grid-cols-6">
        <Categories categories={categories}/>
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

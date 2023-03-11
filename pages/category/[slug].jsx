import Content from "@/components/Content";
import { client } from "@/Lib/client";
import Categories from "@/components/Categories";

export default function Category({ products, categories }) {
  return (
    <>
      <div className="grid grid-cols-4 xl:grid-cols-6 lg:grid-cols-5 ">
        <Categories categories={categories} />
        <div className="hidden md:block"/>
        <Content products={products} />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "category"] {
      _id
    }`;

  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category._id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // const categoryIdQuery = `*[_type == "category" && slug.current == "${slug}"] {_id}`;
  // const categoryId = await client.fetch(categoryIdQuery);

  const categoryProductsQuery = `*[_type == "product" && category[0]._ref == "${slug}"]`;
  const products = await client.fetch(categoryProductsQuery);

  const categoryQuery = `*[_type == "category"]`;
  const categories = await client.fetch(categoryQuery);

  return {
    props: { categories, products },
  };
};

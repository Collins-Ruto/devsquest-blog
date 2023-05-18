import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getCategories, getCategoryPosts } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div>
      <Head>
        <title data-react-helmet="itemprop,lang" itemProp="title" lang="en">
          Blogs Category
        </title>
        <meta
          data-react-helmet="true"
          name="description"
          content="devsquest blogs categories"
        />
        <meta data-react-helmet="true" name="author" content="Collins Ruto"></meta>
      </Head>
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <div className="flex flex-wrap gap-4">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full border-t border-gray-300 bg-gray-800 py-4">
        <div className="container mx-auto text-center text-gray-200">
          © 2023 DevsQuest-blog. All rights reserved. by{" "}
          <a
            className="text-pink-400 font-semibold"
            href="https://collinsruto.netlify.app"
          >
            Collins Ruto
          </a>
        </div>
      </footer>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPosts(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

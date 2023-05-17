import Head from "next/head";
import Image from "next/image";
import { PostCard, PostWidget, Categories, FeaturedPosts } from "../components";
import { getPosts } from "../services";

const Home = ({ posts }) => {
  return (
    <div>
      <Head>
        <title data-react-helmet="itemprop,lang" itemProp="title" lang="en">
          DevsQuest Blog
        </title>
        <meta
          data-react-helmet="true"
          name="description"
          content="DevsQuest is the hub of all developers and techies to share ideas through blos"
        />
        <meta
          data-react-helmet="true"
          name="keywords"
          content="blogs, tech, developer, code, devsquest, web dev, android dev, news"
        />
      </Head>
      <div className="container mx-auto p-2 lg:px-4 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="lg:col-span-9 col-span-1">
            <div className="flex flex-wrap gap-4">
              {posts.map((post, index) => (
                <PostCard post={post.node} key={index} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 col-span-1">
            <div className="lg:sticky relative top-20">
              <PostWidget />
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

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

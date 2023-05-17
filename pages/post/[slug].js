import React from "react";
import {useRouter} from 'next/router'
import Head from "next/head";
import { PostWidget, Categories, Loader } from "../../components";
import { PostDetail, Author, CommentsForm, Comments } from "../../components";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({post}) => {

  const router = useRouter()

  if(router.isFallback){
    return <Loader />
  }

  return (
    <div>
      <Head>
        <title data-react-helmet="itemprop,lang" itemProp="title" lang="en">
          {post.title}
        </title>
        <meta
          data-react-helmet="true"
          name="description"
          content={post.excerpt}
        />
      </Head>
      <div className="container mx-auto px-auto mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
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

export default PostDetails;

export async function getStaticProps({params}) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post :data },
  };
}

export async function getStaticPaths() {
    const posts = await getPosts()

    return {
        paths: posts.map(({node: {slug}}) => ({params: {slug}})),
        fallback: true,
    }
}
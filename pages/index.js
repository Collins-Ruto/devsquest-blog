import Head from 'next/head'
import Image from 'next/image'
import {PostCard, PostWidget, Categories, FeaturedPosts} from '../components'
import {getPosts} from '../services'

const Home = ({posts}) => {
  return (
    <div className="container mx-auto p-2 lg:px-4 mb-8">
      <Head>
        <title>DevsQuest Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        <div className="lg:col-span-9 col-span-1">
          <div className="flex flex-wrap gap-4">
              {posts.map((post, index) => (<PostCard post={post.node} key={index}/>))}
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
)}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}
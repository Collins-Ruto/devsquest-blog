import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className="bg-white flex flex-col relative md:w-[48%] shadow-lg rounded-lg p-0 pb-14 mb-4">
      <div className="relative overflow-hidden shadow-md pb-60 mb-3">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-120 w-full object-cover shadow-lg rounded-t-lg"
        />
      </div>
      <h1 className="transition px-4 duration-100 cursor-pointer hover:text-pink-600 text-2xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="flex text-center items-center justify-between w-full py-1 px-4">
        <div className="flex items-center justify-center lg:mb-0 lg:w-auto mr-0 md:mr-8">
          <img
            src={post.author.photo?.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-green-700 ml-2 text-md">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-lg text-gray-700 px-4 mb-8 font-normal">
        {post.excerpt.substr(0, 120)}
        {"..."}
      </p>
      <div className="text-center left-[calc(43%_-_5rem)] bottom-4 absolute ">
        <span className="transition duration-500 transform hover:translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer rounded-full">
          <Link href={`/post/${post.slug}`}>continue reading</Link>
        </span>
      </div>
    </div>
  );
}

export default PostCard
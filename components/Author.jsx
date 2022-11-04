import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mb-8 rounded-lg bg-black p-12 mt-20 relative bg-opacity-20">
      <div className="absolute left-0 right-0 top-14">
        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;

import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className=" mx-auto sticky top-0 z-40 bg-white px-10 mb-4">
      <div className="border-b-gray-200 w-full flex items-center justify-between md:inline-block border-blue-400 py-3">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-pink-500 hover:text-pink-400 text-4xl">
              DevsQuest
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold text-pink-500 hover:text-pink-400 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div
          className={classNames(`tham md:hidden tham-e-squeeze tham-w-8`, {
            "tham-active": opened,
          })}
        >
          <div className="tham-box">
            <div className="tham-inner bg-pink-500" onClick={()=>{setOpened(!opened)}}/>
          </div>
        </div>
      </div>
      {opened && 
      <div className="">
        <div className="absolute left-0 w-[100%] md:w-80 p-4 h-screen opacity-50 bg-blend-darken bg-white" onClick={() => {setOpened(!opened)}}></div>
        <div className="flex flex-col absolute right-0 w-[60%] md:w-80 p-4 h-screen opacity-100 bg-blend-darken bg-white">
            <span className="font-semibold text-xl mb-3"> Categories</span>
            {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => {setOpened(!opened)}}>
                <span className="mt-2 align-middle ml-2 font-semibold text-pink-500 hover:text-pink-400 cursor-pointer">
                {category.name.substr(0, 18)}
                </span>
            </Link>
            ))}
      </div>
      </div>}
    </div>
  );
};

export default Header
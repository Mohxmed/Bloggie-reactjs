import React from "react";
import { HiLink } from "react-icons/hi";

export default function Article({
  articleImg,
  label,
  title,
  body,
  date,
  authorImg,
  authorName,
}) {
  return (
    <div className="flex flex-col  w-full gap-y-4">
      <div className="relative group">
        <img
          className="rounded-t-3xl w-full h-[300px] object-cover"
          src={articleImg}
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl">
          <span className="text-white text-2xl">
            <HiLink size={40} />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-around gap-y-4 shadow-md p-4 rounded-b-xl -mt-4 min-h-[270px]">
        <div className="space-y-2">
          <a>
            <span className="rounded-full  text-blue-500">{label}</span>
          </a>
          <h2 className="text-xl md:text-2xl font-bold text-blue-950 line-clamp-3">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-gray-500 line-clamp-2 ">{body}</p>
        </div>
        <div className="flex gap-2">
          <img
            className="rounded-full w-12 h-12"
            src={authorImg}
            alt={authorName}
          />
          <div>
            <h5 className="text-blue-950 font-semibold">{authorName}</h5>
            <span className="text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

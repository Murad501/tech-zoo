import React from "react";
import imgOne from "../assets/BlogImage/imgOne.png";

const BlogCard = () => {
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img src={imgOne} alt="blogImage" />
      </figure>
      <button className="absolute top-5 left-5 bg-blue-300 px-3 py-2 rounded-3xl font-semibold hidden md:block">
        Web Development
      </button>
      <div className="card-body bg-gray-900">
        <h2 className="mb-6 font-semibold text-[22px] leading-relaxed">
          আমি একজন ওয়েব ডেভলপার হতে চাই? কিভাবে শুরু করতে পারি?
        </h2>
        <p className="text-lg leading-loose font-light">
          ওয়েব ডেভেলপমেন্ট শেখার পাঁচটা সিস্টেম আছে। ১. ওয়েব ডেভেলপমেন্ট শেখার
          বেস্ট জায়গা হচ্ছে freecodecamp . org । তাদের মতো করে অর্গানাইজড
          রিসোর্চ খুব কম আছে ...
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

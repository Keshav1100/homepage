import React from "react";
import { brands, reviewCard, semicolon, tagLines } from "../assets";

function Review() {
  return (
    <section className="w-full bg-gradient-to-b from-[#7514C2] to-[#2E028C] py-8 px-10 min-h-[80vh]">
      <div className="taglines flex items-center justify-evenly mb-[8rem]">
        {tagLines.map((tag) => (
          <div
            key={tag.id}
            className={`tag-card rounded-xl ${
              tag.id === 1 ? "-rotate-12 translate-y-10" : ""
            } ${
              tag.id === 3 ? "rotate-12 translate-y-10" : ""
            } bg-cover  bg-center w-60 h-[16rem]  bg-white flex items-center justify-center`}
          >
            <h2 className="text-[#7514C2] font-bold text-lg">{tag.line}</h2>
          </div>
        ))}
      </div>
      <div className="review-heading m-4 text-center text-white flex flex-col justify-between items-center gap-y-14">
        <div className="main-heading">
          <h2 className=" font-bold text-5xl">Why Trovex?</h2>
          <h4 className=" font-light">Flip to find out</h4>
        </div>
        <h3 className="text-4xl font-bold text-[#B5A0FF] mb-4">
          Don't just take our word for it!
        </h3>
      </div>
      <div className="review-cards flex items-center justify-around gap-x-5">
        {reviewCard.map((review) => (
          <div
            key={review.id}
            className="card text-white flex flex-col items-center justify-around w-1/3 gap-y-5 rounded-xl bg-[#3B1276] px-8 py-5"
          >
            <img
              src={review.img}
              alt={review.userName}
              className="rounded-full"
            />
            <p className="text-center">"{review.review}"</p>
            <img src={semicolon} alt="semicolon" />
            <div className="user-details text-center">
              <h3>{review.userName}</h3>
              <h4>{review.profession}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="review-brands">
        <h4 className=" font-normal text-center text-white mt-6">
          Trusted by top brands
        </h4>
        <img src={brands} alt="brands list" className="my-5"/>
      </div>
    </section>
  );
}

export default Review;

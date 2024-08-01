import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { features } from "../assets";

function Features() {
  return (
    <section className="my-5">
      <div className="feature-heading mt-4 mb-4 flex flex-col justify-center items-center gap-y-5 py-8 px-10">
        <h4 className="text-[#DF1C41] font-semibold">Features</h4>
        <h2 className="text-[#000000] font-bold text-5xl">
          Create Sales Excellence That Builds Success
        </h2>
        <p className="font-semibold text-base text-[#3e3f42e1] ">
          Rise above the ordinary and watch our AI-powered platform groom your
          sales team into a smart, well-versed, and confident sales force to ace
          any real-life sales challenge.
        </p>
      </div>
      <div className="feature-carousel">
        <Slide indicators={true} arrows={false} >
          {features.map((feature) => (
            <div key={feature.id} className="m-auto each-slide-effect w-[90%]  flex rounded-2xl  shadow-xl shadow-[#7856ff5e] my-9 p-y-5 p-x-12 gap-x-5">
              <div className="feature-img w-1/2">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="feature-details w-1/2 flex flex-col justify-center items-start gap-y-8">
                <h3 className="text-2xl font-bold text-black text-left">{feature.title}</h3>
                <p className="text-left text-sm text-[#3e3f42e1]">{feature.info}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}

export default Features;

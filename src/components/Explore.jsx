import React from "react";
import { exploreItems } from "../assets";

function Explore() {
  return (
    <section className="mt-10 py-8 px-10">
      {exploreItems.map((explore) => (
        <div
          key={explore.id}
          className={`flex w-full ${
            explore.id % 2 === 0 ? "flex-row-reverse" : ""
          } justify-between mb-5`}
        >
          <div className="details">
            <img src={explore.img} alt={explore.title} />
          </div>
          <div className={`details-text flex flex-col items-start ${explore.id===1?"justify-start gap-y-8":"justify-center gap-y-2"} w-[40%] `}>
            {explore.id === 1 && (
              <div className="explore-heading mt-4 mb-4 text-left">
                <h4 className="text-[#DF1C41] font-semibold">Explore</h4>
                <h2 className="text-[#000000] font-bold text-5xl">
                  How does it work?
                </h2>
              </div>
            )}
            <div className="title-div flex items-start justify-center gap-2">
              <img src={explore.logo} alt={explore.title} width={80} />
              <div className="explore-headings flex flex-col items-start justify-center">
                <h4 className="text-sm text-[#7653F4] font-semibold">
                  Step {explore.id}
                </h4>
                <h2 className="text-4xl text-[#3E3F42] font-extrabold text-left">
                  {explore.title}
                </h2>
              </div>
            </div>
            <p className="font-semibold text-base text-[#3E3F42] text-left">
              {explore.info}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Explore;

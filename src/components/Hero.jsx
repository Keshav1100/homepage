import React from "react";
import Button from "./Button";
import { heroRight, vectorBg } from "../assets";

function Hero() {
  return (
    <section className={`flex w-full items-center justify-between min-h-[70vh] bg-[url("${vectorBg}")] bg-cover bg-center gap-10 my-10 py-8 px-10`} >
      <div className="text-area h-full flex flex-col w-1/2 justify-evenly gap-5 text-left">
        <h2 className="text-[#3E3F42] text-6xl font-extrabold">
          Master the art of sales with realistic AI role-play
        </h2>
        <p className="text-[#606266] text-base">
          Watch your sales soar to new heights with our AI-driven virtual pitch
          partner. Build confident and skilled sales teams with realistic and
          immersive learning.
        </p>
        <div className="btn-group m-auto flex items-center w-full gap-8">
          <Button
            btn={"Book a Demo"}
            classname="bg-gradient-to-r from-[#A356E0] to-[#F83167] py-3 w-1/2"
          />
          <div className="bg-gradient-to-r from-[#A356E0] to-[#F83167] p-1 rounded-md text-[#A356E0] w-1/2">
            <Button btn={"Watch Demo"} classname="bg-white p-3 text-[#A356E0] w-full border-none" border={true}/>
          </div>
        </div>
      </div>
      <div className="app-info w-1/2">
      <img src={heroRight} alt="" className="w-full"/></div>
    </section>
  );
}

export default Hero;

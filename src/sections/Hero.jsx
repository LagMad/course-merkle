import React from "react";
import portrait from "../assets/images/portrait.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full pt-24 pb-16 px-32 bg-cust-blue min-h-screen text-white justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center h-full gap-5">
        <img className="w-48 rounded-full" src={portrait} alt="portrait" />
        <div className="text-2xl">Hello, I am Peter!</div>
      </div>
      <div className="text-center text-5xl leading-normal font-bold">
        A frontend developer <br /> specialized in React
      </div>
    </div>
  );
};

export default Hero;

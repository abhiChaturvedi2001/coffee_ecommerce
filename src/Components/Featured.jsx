import React from "react";
import image1 from "../Assets/img1.jpeg";

const Featured = () => {
  return (
    <>
      <div className="flex justify-around w-[80%] h-[60vh] items-center mx-auto px-5 ">
        <div className="left w-[100%] max-md:text-center ">
          <h1 className="font-bold text-3xl uppercase tracking-wider font-rubik ">
            Discover the best coffee
          </h1>
          <p className="mt-3 font-poppins ">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <button className="border font-poppins px-3 py-3 shadow-lg mt-5 w-[20rem] font-bold rounded-md">
            Learn More
          </button>
        </div>
        <img
          className="bg-orange-300 w-[650px] max-md:hidden "
          src={image1}
          alt=""
        />
      </div>
    </>
  );
};

export default Featured;

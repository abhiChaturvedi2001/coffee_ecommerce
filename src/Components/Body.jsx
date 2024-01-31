import React from "react";
import Featured from "./Featured";
import Products from "./Products";
import Different from "./Different";

const Body = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[80vh] text-center">
        <div className="banner-container w-[50%]">
          <h3 className="font-bold tracking-wider uppercase ">
            Welcome to the MCoffee
          </h3>
          <h1 className="font-bold text-5xl my-4 font-rubik ">
            {" "}
            Better Beans, Better Coffee
          </h1>
          <h3 className="font-small font-poppins  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
            reprehenderit neque, asperiores eligendi nam deleniti tenetur
            voluptatum quaerat tempore nobis est vero quam odio consequuntur
            magnam? Nihil, voluptatum odio?
          </h3>
          <button className="border mt-5 font-poppins font-bold px-3 py-2 shadow-md cursor-pointer w-[12rem] rounded-md">
            Shop Now
          </button>
        </div>
      </div>
      <Featured />
      <Products />
      <Different />
    </>
  );
};

export default Body;

import React from "react";
import badge1 from "../Assets/image2.png";
import badge2 from "../Assets/image3.png";
import badge3 from "../Assets/image4.png";

const Different = () => {
  return (
    <>
      <div className="my-10 h-[100vh]">
        <h1 className="text-center text-4xl font-bold font-rubik">
          Why we are different?
        </h1>
        <p className="text-center font-poppins">
          We don’t just make your coffee, we make your day!
        </p>
        <div className="flex justify-center items-center space-x-5 h-[20vh]">
          <img src={badge1} alt="" />
          <img src={badge2} alt="" />
          <img src={badge3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Different;

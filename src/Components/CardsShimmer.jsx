import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardsShimmer = () => {
  return (
    <>
      <div className="flex mt-4 flex-wrap justify-center text-center w-[80%] mx-auto space-x-3 space-y-5 ">
        <Skeleton
          containerClassName="flex space-x-4"
          height={200}
          width={200}
          count={4}
        />
        <Skeleton
          containerClassName="flex space-x-4"
          height={200}
          width={200}
          count={4}
        />
        <Skeleton
          containerClassName="flex space-x-4"
          height={200}
          width={200}
          count={4}
        />
      </div>
    </>
  );
};

export default CardsShimmer;

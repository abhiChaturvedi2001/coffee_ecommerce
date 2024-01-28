import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleSimmer = () => {
  return (
    <>
      <div className="flex space-x-[100px] justify-center pt-[200px]">
        <Skeleton height={400} width={300} />
        <div>
          <Skeleton height={10} width={500} />
          <Skeleton height={10} width={450} />
          <Skeleton height={10} width={400} />
          <Skeleton height={10} width={350} />
          <Skeleton height={10} width={300} />
          <Skeleton height={10} width={250} />
          <Skeleton height={10} width={200} />
          <Skeleton height={10} width={150} />
          <Skeleton height={10} width={100} />
          <Skeleton height={10} width={50} />
          <Skeleton height={10} width={50} />
          <Skeleton height={10} width={500} />
        </div>
      </div>
    </>
  );
};

export default SingleSimmer;

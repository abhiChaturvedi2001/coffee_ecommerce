import React from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <>
      <div className="h-[200vh]">
        <h1 className="text-center text-5xl font-bold font-rubik my-3 ">
          Our Products
        </h1>
        <p className="text-center font-medium font-poppins w-[40%] mx-auto ">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        <div>
          <ProductsCard />
        </div>
      </div>
    </>
  );
};

export default Products;

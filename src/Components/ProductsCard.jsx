import React from "react";
import useFetchProductData from "../Utils/useFetchProductData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardsShimmer from "./CardsShimmer";

const ProductsCard = () => {
  useFetchProductData(); // making custom hooks beacuse we dont want to give load of fetching the data from the API
  const prodData = useSelector((store) => store.productData.coffeeData); // subscribe the coffeeData Array from the store

  // doing some conditional rendering
  return prodData.length === 0 ? (
    <CardsShimmer />
  ) : (
    <>
      <div className="flex flex-wrap justify-center text-center w-[80%] mx-auto mt-4  ">
        {prodData.map((items) => {
          const { name, price, region, image_url, id } = items;
          return (
            <>
              <Link to={`/singleProduct/${id}`}>
                <div
                  key={id}
                  className="shadow-md hover:shadow-lg transition-all duration-300 mt-3 my-3 py-2 rounded-xl cursor-pointer  "
                >
                  <img className="w-[250px]" src={image_url} alt="" />
                  <div>
                    <h3 className="font-bold">{name}</h3>
                    <h3>$ {price}</h3>
                    <h3 className="font-medium">Region : {region}</h3>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductsCard;

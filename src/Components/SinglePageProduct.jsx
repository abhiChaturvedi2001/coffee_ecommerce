import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_Api_url } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addCartData, addSingleProductData } from "../Utils/ProductSlice";
import SingleSimmer from "./SingleSimmer";
import Cart from "./Cart";

const SinglePageProduct = () => {
  const [selectedFlavour, setSelectedFlavour] = useState(null);
  const [isCart, setisCart] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const getSingleProductData = async () => {
    const data = await fetch(`${base_Api_url}/${id}`);
    const json = await data.json();
    dispatch(addSingleProductData(json));
  };
  useEffect(() => {
    getSingleProductData();
  }, []);

  const singleData = useSelector(
    (store) => store.productData.singleProductData
  );
  const handleCart = (singleData) => {
    if (selectedFlavour) {
      setisCart(true);
      const dataWithFlavour = { ...singleData[0], selectedFlavour };
      dispatch(addCartData(dataWithFlavour));
    } else if (selectedFlavour === null) {
      alert("please select any flaovur");
    }
  };

  return singleData === null ? (
    <SingleSimmer />
  ) : (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        {singleData.map((items) => {
          const {
            id,
            name,
            image_url,
            description,
            price,
            weight,
            region,
            flavor_profile,
          } = items;
          return (
            <>
              <img className="w-[600px] h-[700px]" src={image_url} alt="" />
              <div>
                <h1 className="font-bold text-5xl font-rubik ">{name}</h1>
                <p className="mt-4 w-[80%]">{description}</p>
                <p className="mt-4 font-bold">Price : ${price}</p>
                <p className="font-bold mt-4">Region : {region}</p>
                <p className="mt-4 font-bold"> Weight : {weight} gm</p>
                <p className="font-bold mt-4">Flavors : - </p>
                <div className="flex items-center space-x-5">
                  {flavor_profile.map((items) => {
                    return (
                      <>
                        <input
                          type="radio"
                          value={items}
                          checked={selectedFlavour === items}
                          onChange={() => setSelectedFlavour(items)}
                        />
                        <label htmlFor={items}>{items}</label>
                      </>
                    );
                  })}
                </div>
                <button
                  onClick={() => handleCart(singleData)}
                  className="mt-4 shadow-lg font-bold uppercase tracking-wide px-3 py-4 cursor-pointer w-[60%] rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </div>

      <Cart isCart={isCart} setisCart={setisCart} />
    </>
  );
};

export default SinglePageProduct;

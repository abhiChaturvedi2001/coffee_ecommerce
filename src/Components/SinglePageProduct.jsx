import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_Api_url } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addDataToCart, addSingleProductData } from "../Utils/ProductSlice";
import SingleSimmer from "./SingleSimmer";
import Cart from "./Cart";
import { toast } from "react-toastify";

const SinglePageProduct = () => {
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [ProductQty, setProductQty] = useState(1);
  const [isCart, setisCart] = useState(false); // adding the toggle functionality
  const dispatch = useDispatch(); // help of this function we have to connect app with the redux store
  const { id } = useParams(); // it gives unique product id which help to find easily of particular product

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
  const handleCart = (product) => {
    setisCart(true);
    if (selectedFlavour === "") {
      toast.success("Choose Any flavour", {
        position: "top-center",
      });
    } else {
      dispatch(
        addDataToCart({
          ...product[0],
          flavour: selectedFlavour,
          quantity: ProductQty,
        })
      );
    }
  };

  return singleData === null ? (
    <SingleSimmer />
  ) : (
    <>
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
            <div className="flex justify-center items-center h-[100vh] max-md:flex-wrap ">
              <img className="w-[600px] h-[700px]" src={image_url} alt="" />
              <div>
                <h1 className="font-bold text-5xl font-rubik ">{name}</h1>
                <p className="mt-4 w-[80%]">{description}</p>
                <p className="mt-4 font-bold">Price : ${price}</p>
                <p className="font-bold mt-4">Region : {region}</p>
                <p className="mt-4 font-bold"> Weight : {weight} gm</p>
                <div className="mt-4">
                  <label className="font-bold">Flavours : </label>
                  <select
                    className="w-[10rem] ml-3 outline-none bg-gray-200 py-1 px-2 rounded-md"
                    value={selectedFlavour}
                    onChange={(e) => setSelectedFlavour(e.currentTarget.value)}
                  >
                    <option value="">Choose Any Flavour</option>
                    {flavor_profile.map((items, index) => {
                      return (
                        <option key={index} value={items}>
                          {items}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="font-bold">Qty :</label>
                  <select
                    className="w-[10rem] ml-3 outline-none bg-gray-200 py-1 px-2 rounded-md"
                    value={ProductQty}
                    onChange={(e) =>
                      setProductQty(parseInt(e.currentTarget.value))
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <button
                  onClick={() => handleCart(singleData)}
                  className="mt-4 shadow-lg font-bold uppercase tracking-wide px-3 py-4 cursor-pointer w-[60%] rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        );
      })}
      <Cart isCart={isCart} setisCart={setisCart} />
    </>
  );
};

export default SinglePageProduct;

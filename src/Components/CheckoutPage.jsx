import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const userAddress = useSelector((store) => store.productData.userAddress);
  const amount = useSelector((store) => store.productData.totalAmount);
  const { userName, companyName, number, address, city, stateName } =
    userAddress;

  const handlePlace = () => {
    setPlaced(true);

    setTimeout(() => {
      setPlaced(false);
      navigate("/");
    }, 10000);
  };
  return placed ? (
    <img
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      src="https://cdn.dribbble.com/users/2572904/screenshots/17169793/media/ed801ffe0fbeb4b95ca246ba1f5ea398.gif"
      alt=""
    />
  ) : (
    <>
      <div className="flex justify-center items-center h-[100vh] space-x-5 font-poppins ">
        <div className="border w-[30%] px-3 py-4">
          <h1>Company Name : {companyName}</h1>
          <h1>Name: {userName}</h1>
          <h1>Mobile : {number}</h1>
          <h1>Address : {address}</h1>
          <h1>City : {city}</h1>
          <h1>State : {stateName}</h1>
        </div>
        <div>
          <h1>Total Amount : {Math.round(amount)}</h1>
          <button
            onClick={handlePlace}
            className="border bg-green-700 text-white font-bold font-poppins px-4 py-2 "
          >
            Order Placed
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

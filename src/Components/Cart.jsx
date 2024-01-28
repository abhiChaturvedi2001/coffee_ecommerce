import React from "react";
import { useSelector } from "react-redux";
const Cart = ({ isCart, setisCart }) => {
  const cart = useSelector((store) => store.productData.cartData);
  if (cart.length === 0) return;
  return (
    <>
      <div
        className={`absolute top-0 right-0 bg-gradient-to-t  transition-all duration-300 from-black w-[100%] h-[100vh] ${
          isCart ? `w-[100%]` : `w-[0%]`
        }  `}
      >
        <div
          className={`bg-white absolute transition-all  duration-300  right-0  w-[30%] h-[100%] ${
            isCart ? "w-[30%] block" : "w-[0%] hidden"
          }`}
        >
          <h1
            onClick={() => setisCart(false)}
            className="text-3xl cursor-pointer"
          >
            X
          </h1>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Cart;

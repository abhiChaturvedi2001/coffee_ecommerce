import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";
import { deleteItemsCart } from "../Utils/ProductSlice";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";


const Cart = ({ isCart, setisCart }) => {
  const isLoggedIn = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((store) => store.productData.cartData);
  const amount = useSelector((store) => store.productData.totalAmount);
  const handleDelete = (flavour) => {
    dispatch(deleteItemsCart(flavour));
    toast.success("Cart Update Successfully", {
      position: "top-center",
    });
  };

  const checkUserLoggedIn = () => {
    if (isLoggedIn !== null) {
      navigate("/address");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        className={`z-1000 absolute top-0 right-0 bg-gradient-to-t transition-all duration-300 from-black w-[0%] h-screen max-md:h-[200vh] ${
          isCart ? `w-[100%]` : `w-[0%]`
        }  `}
      >
        <div
          className={`z-1000 bg-white absolute transition-all overflow-y-scroll duration-300 right-0 w-[30%] h-[100%] ${
            isCart ? "w-[30rem] block" : "w-[0%] hidden"
          }`}
        >
          <h1
            onClick={() => setisCart(false)}
            className="text-3xl  cursor-pointer absolute right-5 top-4"
          >
            <RxCross1 />
          </h1>
          <div className="h-[75vh] overflow-y-scroll ">
            {cartData.length === 0 ? (
              <h1 className="font-bold text-center mt-10">
                Opps there is no itemes
              </h1>
            ) : (
              cartData.map((items) => {
                const { id, name, quantity, flavour, image_url, price } = items;
                return (
                  <>
                    <div className="flex mt-10  items-center space-x-5">
                      <img className="w-[100px]" src={image_url} alt="" />
                      <div>
                        <div className="font-bold">{name}</div>
                        <div className="font-bold">Flavour : {flavour}</div>
                        <div className="font-bold">Qty : {quantity}</div>
                        <div className="font-bold">$ : {price}</div>
                      </div>
                      <MdDelete
                        onClick={() => handleDelete(flavour)}
                        className="text-2xl cursor-pointer"
                      />
                    </div>
                  </>
                );
              })
            )}
          </div>
          <div className="fixed bottom-2 w-[30rem] px-3 ">
            <div className="flex justify-between px-3 my-3 font-bold">
              <p>Total</p>
              <p>$ {Math.round(amount)}</p>
            </div>
            <button
              onClick={checkUserLoggedIn}
              className="bg-red-400 w-full py-3 font-bold text-white"
            >
              {" "}
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

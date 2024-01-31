import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteCartData } from "../Utils/ProductSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ isCart, setisCart }) => {
  const [selectedQuantities, setSelectedQuantities] = useState(1);
  const cart = useSelector((store) => store.productData.cartData);
  const totalAmount = useSelector((store) => store.productData.totalAmount);
  const dispatch = useDispatch();
  const optionArray = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

  const handleDeleteCart = (id) => {
    dispatch(deleteCartData(id));
  };
  return (
    <>
      <ToastContainer />
      <div
        className={`absolute top-0 right-0 bg-gradient-to-t transition-all duration-300 from-black w-[0%] h-[100vh] ${
          isCart ? `w-[100%]` : `w-[0%]`
        }  `}
      >
        <div
          className={`bg-white absolute transition-all overflow-y-scroll duration-300 right-0 w-[30%] h-[100%] ${
            isCart ? "w-[30%] block" : "w-[0%] hidden"
          }`}
        >
          <h1
            onClick={() => setisCart(false)}
            className="text-3xl cursor-pointer absolute right-5 top-4"
          >
            X
          </h1>
          <div className="mt-20">
            {/* here the data coming array of the array that is the we map through the map */}
            {cart.length === 0 ? (
              <h1 className="font-bold text-center">Opps ! cart is empty</h1>
            ) : (
              cart.map((items) => {
                const { id, image_url, name, price, selectedFlavour } = items;
                return (
                  <>
                    <div className="flex items-center space-x-5 font-poppins">
                      <img className="w-[150px]" src={image_url} alt="" />
                      <div>
                        <h1 className="font-bold">{name}</h1>
                        <h2 className="font-medium">
                          Flavour : {selectedFlavour}
                        </h2>
                        <p>$ {price}</p>
                        Qty :{" "}
                        <select
                          id={id}
                          value={selectedQuantities}
                          onChange={(e) =>
                            setSelectedQuantities(
                              parseInt(e.currentTarget.value)
                            )
                          }
                        >
                          {optionArray.map((val) => (
                            <option key={val.value} value={val.value}>
                              {val.value}
                            </option>
                          ))}
                        </select>
                      </div>
                      <MdDelete
                        onClick={() => handleDeleteCart(id)}
                        className="text-3xl cursor-pointer"
                      />
                    </div>
                    <div className="fixed bottom-5 w-[30%] bg-white px-4 ">
                      <div className="flex justify-between mb-4">
                        <h1>Total</h1>
                        <p>$ {totalAmount * selectedQuantities} </p>
                      </div>
                      <button className="w-full bg-red-500 text-white py-2">
                        Complete Order
                      </button>
                    </div>
                  </>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

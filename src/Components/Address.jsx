import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAddress } from "../Utils/ProductSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = () => {
  const company = useRef(null);
  const userName = useRef(null);
  const number = useRef(null);
  const address = useRef(null);
  const city = useRef(null);
  const state = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleAddress = () => {
    if (
      userName.current.value === "" &&
      address.current.value === "" &&
      state.current.value === "" &&
      city.current.value === "" &&
      number.current.value === ""
    ) {
      toast.error("Please fill out All the Field", {
        position: "top-center",
      });
    } else {
      dispatch(
        addUserAddress({
          companyName: company.current.value,
          userName: userName.current.value,
          number: number.current.value,
          address: address.current.value,
          city: city.current.value,
          stateName: state.current.value,
        })
      );
      toast.success("Your Address Saved ", {
        position: "top-center",
      });
      company.current.value = " ";
      userName.current.value = " ";
      number.current.value = " ";
      address.current.value = " ";
      city.current.value = " ";
      state.current.value = " ";
      navigate("/checkoutPage");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-[#d6dee8] flex items-center justify-center h-[100vh]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-[70%] px-3 py-3"
          action=""
        >
          <div>
            <input
              ref={company}
              className="w-full py-3 px-3"
              type="text"
              placeholder="Company Name (optional)"
            />
          </div>
          <div className="mt-4">
            <input
              ref={userName}
              className="w-[49%] py-3 px-3"
              type="text"
              placeholder="Name"
            />
            <input
              ref={number}
              className="w-[49%] ml-2 py-3 px-3"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="mt-4">
            <textarea
              ref={address}
              className="w-full px-3 py-3"
              cols="30"
              rows="10"
              placeholder="Address Area or stree"
            ></textarea>
          </div>
          <div className="mt-4">
            <input
              ref={city}
              className="w-[49%] py-3 px-3"
              type="text"
              placeholder="City/ Town"
            />
            <input
              ref={state}
              className="w-[49%] ml-2 py-3 px-3"
              type="text"
              placeholder="State"
            />
          </div>
          <button
            onClick={HandleAddress}
            className="bg-green-400 text-white font-poppins mt-4 w-full py-3"
          >
            Save Your Address
          </button>
        </form>
      </div>
    </>
  );
};

export default Address;

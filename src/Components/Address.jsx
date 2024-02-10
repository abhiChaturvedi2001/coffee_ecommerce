import React from "react";

const Address = () => {
  return (
    <>
      <div className="bg-[#d6dee8] flex items-center justify-center h-[100vh]">
        <form className=" w-[70%] px-3 py-3" action="">
          <div>
            <input
              className="w-full py-3 px-3"
              type="text"
              placeholder="Company Name (optional)"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-[49%] py-3 px-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-[49%] ml-2 py-3 px-3"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="mt-4">
            <textarea
              className="w-full px-3 py-3"
              cols="30"
              rows="10"
              placeholder="Address Area or stree"
            ></textarea>
          </div>
          <div className="mt-4">
            <input
              className="w-[49%] py-3 px-3"
              type="text"
              placeholder="City/ Town"
            />
            <input
              className="w-[49%] ml-2 py-3 px-3"
              type="text"
              placeholder="State"
            />
          </div>
          <button className="bg-green-400 text-white font-poppins mt-4 w-full py-3">
            Save and Deliver Here
          </button>
        </form>
        <div>
          <h1>totalAmount 0 </h1>
        </div>
      </div>
    </>
  );
};

export default Address;

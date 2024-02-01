import React, { useState } from "react";

const Login = () => {
  const [isSignUpForm, setisSignUpForm] = useState(false);

  const handleToggle = () => {
    setisSignUpForm(!isSignUpForm);
  };

  const handleAuthentication = () => {};

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-3xl uppercase font-bold tracking-wider">
          Welcome to the MCoffee
        </h1>
        <h2 className="text-center font-bold mt-2 tracking-wider">
          Better Beans, Better Coffee
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-5 w-[25rem] px-3 py-3"
        >
          {isSignUpForm && (
            <div>
              <label className="text-1xl">Name</label>
              <input
                className="block mt-3 w-full py-2 px-2 bg-gray-300 shadow-lg rounded-lg"
                type="text"
                placeholder="your name"
              />
            </div>
          )}
          {isSignUpForm && (
            <div className="mt-3">
              <label className="text-1xl">Phone</label>
              <input
                className="block mt-2 w-full py-2 px-2 bg-gray-300 shadow-lg rounded-lg"
                type="text"
                placeholder="Phone"
              />
            </div>
          )}
          <div className="mt-3">
            <label className="text-1xl">Email</label>
            <input
              className="block mt-2 w-full py-2 px-2 bg-gray-300 shadow-lg rounded-lg"
              type="email"
              placeholder="example@123"
            />
          </div>
          <div className="mt-3">
            <label className="text-1xl">Password</label>
            <input
              className="block mt-2 rounded-lg bg-gray-300 shadow-lg w-full py-2 px-2 outline-none "
              type="password"
              placeholder="password"
            />
          </div>
          <button
            onClick={handleAuthentication}
            className="w-full mt-3 rounded-md bg-purple-500 py-2 shadow-lg text-white font-bold"
          >
            {isSignUpForm ? "Sign up" : "Login"}
          </button>
          <p className="mt-5 text-center font-bold">
            {isSignUpForm
              ? "Already Have an Account ? please "
              : " Not a Member ? Please "}
            <span
              onClick={handleToggle}
              className="hover:underline cursor-pointer"
            >
              {isSignUpForm ? "Login" : "Signup"}
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

import React, { useRef, useState } from "react";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignUpForm, setisSignUpForm] = useState(false); // manage the toggle functionality in our App
  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  // for hande the above toggle functionalty we are making the function for handle that.
  const handleToggle = () => {
    setisSignUpForm(!isSignUpForm);
  };

  // this button to hande the authentication process via Firebase
  const handleAuthentication = () => {
    if (isSignUpForm === true) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            phoneNumber: phone.current.value,
          })
            .then(() => {})
            .catch((error) => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

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
                ref={name}
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
                ref={phone}
                className="block mt-2 w-full py-2 px-2 bg-gray-300 shadow-lg rounded-lg"
                type="text"
                placeholder="Phone"
              />
            </div>
          )}
          <div className="mt-3">
            <label className="text-1xl">Email</label>
            <input
              ref={email}
              className="block mt-2 w-full py-2 px-2 bg-gray-300 shadow-lg rounded-lg"
              type="email"
              placeholder="example@123"
            />
          </div>
          <div className="mt-3">
            <label className="text-1xl">Password</label>
            <input
              ref={password}
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

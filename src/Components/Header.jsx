import React, { useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { App_logo } from "../Utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav className="flex justify-around absolute w-full items-center min-h-[12vh]">
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <img src={App_logo} alt="app_logo" className="logo w-[60px]" />
            <h3 className="font-bold tracking-widest text-2xl font-rubik ">
              MCoffee
            </h3>
          </div>
        </Link>
        <ul className="flex items-center space-x-8 font-medium font-poppins max-md:hidden">
          <Link to={"/about"}>
            <li>About us</li>
          </Link>
          <li>Delivery</li>
          {!isLoggedIn && (
            <li>
              <Link to={"/login"}>
                {" "}
                <CiUser className="text-3xl cursor-pointer" />
              </Link>
            </li>
          )}
          {isLoggedIn && <div>Welcome 👋🏻 {isLoggedIn.displayName}</div>}
          {isLoggedIn && (
            <div onClick={handleSignout} className="border px-3 py-2 ">
              Logout
            </div>
          )}
        </ul>
        <div className="hidden max-sm:block">X</div>
      </nav>
    </>
  );
};

export default Header;

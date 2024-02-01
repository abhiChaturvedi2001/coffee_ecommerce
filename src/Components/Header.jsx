import React from "react";
import { CiUser } from "react-icons/ci";
import { App_logo } from "../Utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
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
          <li>Our Products</li>
          <li>Delivery</li>
          <li>
            <Link to={"/login"}>
              {" "}
              <CiUser className="text-3xl cursor-pointer" />
            </Link>
          </li>
        </ul>
        <div className="hidden max-sm:block">X</div>
      </nav>
    </>
  );
};

export default Header;

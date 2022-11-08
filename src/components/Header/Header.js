import React from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-red-400 h-20 flex items-center  overflow-hidden">
      <img className="w-20 ml-14 rounded-2xl" src={img} alt="" />
      <div className="flex  items-center justify-between container mx-auto w-10/12  ">
        <h1 className="text-3xl text-white font-bold">
          Quick <span className="text-zinc-900">Delivery</span>{" "}
        </h1>
        <nav className="flex items-center">
          <Link className="mx-3 text-white" to="/">
            Home
          </Link>
          <Link className="mx-3 text-white" to="/services">
            Services
          </Link>
          <Link className="mx-3 text-white" to="/blog">
            Blog
          </Link>
          <Link className="mx-3 text-white" to="/blog">
            Theme
          </Link>
          <Link className="mx-3 text-white" to="/login">
            Login
          </Link>
          </nav>
      </div>
      
    </div>
  
  );
};

export default Header;

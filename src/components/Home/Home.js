import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const services=useLoaderData();
    const {name,price,img,_id}=services;

  return (
    <div>
        <div>
        <p className="text-red-600">{name}</p>
      </div>
      <div className="background-image w-full mx-auto mt-5"></div>
      
      <button className="block w-9/12 rounded-md bg-red-500 mx-auto  mt-2 h-10 text-white font-bold text-xl">
        <Link to="/services">see all</Link>
      </button>
      
    </div>
  );
};

export default Home;

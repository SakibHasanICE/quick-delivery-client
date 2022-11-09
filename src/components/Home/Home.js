import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import HomeData from "../HomeData/HomeData";
import "./Home.css";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="background-image w-full mx-auto mt-5">
      <div className="flex flex-col h-5/6 justify-center items-center">
          <p className=" text-4xl font-bold text-slate-100 ">
            We do our best to provide you best online delivery services in all
            catagory
          </p>
          <p className="text-4xl font-bold text-white">
            Our motto is to make everything available is just your doorstep.
          </p>
        </div>
      </div>
      <div className="body-container w-11/12 mx-auto">
        <div className="card gap-9 mx-5 mt-5 ">
          {services.map((service) => (
            <HomeData key={service.id} service={service}></HomeData>
          ))}
          ;
        </div>
      </div>
      <Link to="/services">
        <button className="block w-9/12 rounded-md bg-red-500 mx-auto  mt-2 h-10 text-white font-bold text-xl">
          {" "}
          see all{" "}
        </button>
      </Link>
    </div>
  );
};

export default Home;

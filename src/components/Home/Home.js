import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import HomeData from "../HomeData/HomeData";
import "./Home.css";
import img from "../images/delivery.jpg";

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
          <p className="text-4xl font-bold text-white mt-5">
            "Our motto is to make everything available is just your doorstep".
          </p>
        </div>
      </div>
      <div>
        <p className="mt-7 text-3xl text-cyan-500 underline font-bold mb-7 ">
          About Us
        </p>
        <div className="container w-11/12 mx-auto border-slate-400 border-2 p-3 rounded-md">
          <div className=" grid grid-cols-2 ">
            <img src={img} alt="" />
            <div className="flex  flex-col justify-center items-center">
              <p className=" italic text-3xl text-cyan-500 font-bold mb-7 ">
                Since 1987, at your service
              </p>
              <p className="text-lg font-bold text-justify">
                After so many years of service we gain lot of experience.We do
                our best to provide you best experience for online delivery.Dont
                be hesitate to take our service as or service is best in these
                catagory.So please give us opportunity to give you our delivery
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container w-11/12 mx-auto">
        <p className="mt-7 mb-2 text-3xl text-cyan-500 underline font-bold  ">
          Services
        </p>
        <div className="card gap-9 mx-5 mt-5 ">
          {services.map((service) => (
            <HomeData key={service.id} service={service}></HomeData>
          ))}
          ;
        </div>
      </div>
      <Link to="/services">
        <button className="block w-36 mb-7 rounded-md bg-red-500 mx-auto  mt-2 h-10 text-white font-bold text-xl">
          {" "}
          see all{" "}
        </button>
      </Link>
      <div className="border-slate-400  border-2 p-3 rounded-md mb-10 w-11/12 mx-auto">
        <p className="mt-4 mb-7 text-3xl text-cyan-500 underline font-bold  ">
          Frequently Asked Questions(FAQ)
        </p>
        <div className="text-left mb-5">
          <p className="text-2xl text-lime-600 underline font-bold">
            1. How you can order something on our page?
          </p>
          <p className="text-xl font-bold">
            Firstly just go to your desire cataory.Select a service and just put
            your order for home delivery.
          </p>
        </div>
        <div className="text-left mb-5">
          <p className="text-2xl text-lime-600 underline font-bold">
            2. How many days to wait for recieve your parcel?
          </p>
          <p className="text-xl font-bold">
            It generally takes 5 to 7 days.But sometimes it can consume more
            than 7 days due to our shipment process or some climate issue.
          </p>
        </div>
        <div className="text-left mb-5">
          <p className="text-2xl text-lime-600 underline font-bold">
            3. Why you choose us?
          </p>
          <p className="text-xl font-bold">
            We are best on our service.You would have no complain to our
            service. For experience best home delivery service you can choose us
            without any doubt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

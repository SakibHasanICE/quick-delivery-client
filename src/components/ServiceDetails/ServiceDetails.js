import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  return (
    <div>
      <div>
      <p className="mt-7 mb-2 text-3xl text-cyan-500 underline font-bold  ">Details of Service</p>
        <p className="text-3xl text-green-800 font-bold mt-2">{details.name}</p>
        <img className="w-7/12 mx-auto  mt-7 mb-3" src={details.img} alt="" />
        <p className="text-lg text-emerald-800 mb-11 font-medium mt-2 w-10/12 mx-auto text-justify">
          {details.information}
        </p>
      </div>
      <div>
      <button className="block w-1/6 rounded-md bg-red-500 mx-auto  mt-2 h-10 text-white font-bold text-xl">Add Your Review</button>
      </div>
    </div>
  );
};

export default ServiceDetails;

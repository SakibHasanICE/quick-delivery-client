import React from 'react';
import { Link } from "react-router-dom";
import "./service.css"
const Service = ({service}) => {
    const { _id, img, name, price,information } = service;
    return (
        <div className="border-slate-400 rounded-md border-2 px-4 pb-9">
       
      <img className="mt-3 h-3/5" src={img} alt="" />
      <p className="text-xl text-green-800 font-bold mt-2">{name}</p>
      <p className="text-orange-800 font-semibold">Price: {price}</p>
      <p className="text-orange-800 font-semibold ellipsis">{information}</p>
      <Link to={`/service/${_id}`}><button className="block w-9/12 rounded-md bg-red-500 mx-auto  mt-2 h-10 text-white font-bold text-xl">Service Details</button></Link>
    </div>
    );
};

export default Service;
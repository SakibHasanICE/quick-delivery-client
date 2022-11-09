import React, { useEffect } from "react";
import { useState } from "react";

import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <div className="body-container w-11/12 mx-auto">
          <p className="mt-7 mb-2 text-3xl text-cyan-500 underline font-bold">All Services</p>
        <div className="card gap-9 mx-5 mt-5 ">
          {services.map(service => (
            <Service key={service.id} service={service}></Service>
          ))};
        </div>
      </div>
    );
};

export default Services;
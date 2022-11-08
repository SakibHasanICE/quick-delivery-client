import React, { useEffect } from "react";
import { useState } from "react";
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <div className="body-container w-11/12 mx-auto">
        <div className="card gap-9 mx-5 mt-5 ">
          {services.map(service => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        {/* <div className="border-slate-400 rounded-md border-2 mt-5">
          {courses.map((course) => (
            <p className="text-sky-500 mb-4 mt-12 ">
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </p>
          ))}
        </div> */}
      </div>
    );
};

export default Services;
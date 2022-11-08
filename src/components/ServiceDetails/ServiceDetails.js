import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {name}=useLoaderData()
    return (
        <div>
           <p>{name}</p> 
        </div>
    );
};

export default ServiceDetails;
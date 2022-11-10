import React,{useContext, useState} from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import "./ServiceDetails.css"


const ServiceDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
    
  const [review,setReview]=useState({});
  const handleAddUser=event=>{
    event.preventDefault();
    const form =event.target;
    form.reset();
    fetch("http://localhost:4000/review",{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        alert('Review added succesfully')
      }
    })
  }
  
  const handleInputBlur=event=>{
        const field=event.target.name;
        const value=event.target.value;
        const newReview={...review};
        newReview[field]=value;
        setReview(newReview);
        
  }
  
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
        {
            user.email===user?.email ?   
            <div>
              <p className="mt-7 text-3xl text-cyan-500 underline font-bold">Review</p>
              <div className='form-container h-fit container mx-auto mb-14'>
              <h2 className='text-3xl mt-5 mb-3'>Add Your Review</h2>
              <form onSubmit={handleAddUser}>
                <label className='block text-left ml-12' htmlFor="email">Email</label>
                <input onBlur={handleInputBlur} className='border-black border-2 p-3 rounded-md w-9/12 h-10' type="email" name="email" required/>
                <label className='block mt-4 text-left ml-12' htmlFor="text">Description</label>
                <input onBlur={handleInputBlur} className='border-black p-2  rounded-md border-2 w-9/12 h-10' type="text"  name="text" required/>
                <button className='block w-2/5 mb-7 rounded-md bg-red-500 mx-auto mt-5 h-10 text-white font-bold text-xl' type="submit">Submit</button>
              </form>
           </div>
            </div>
            : <p>login</p>
        }
      
    </div>
  );
};

export default ServiceDetails;

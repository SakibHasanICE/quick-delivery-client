import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

import './Login.css'
const Login = () => {
    const {login,signinWithGoogle}=useContext(AuthContext);
    const handleSubmit = event=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        form.reset();
        login(email,password)
         .then(result =>{
             const user=result.user;
             console.log(user)
            
         })
         .catch(error=>{
            console.error(error);
         })
    }
    const handleGooglesignin=()=>{
        signinWithGoogle()
        .then(result=>{
            const user=result.user;
            <p className="text-red-600 text-xl">{user.email}</p>  
        })
        .catch(error=>console.error(error))
}   
  
    return (
        <div className='form-container h-fit container mx-auto mb-14'>
            <h2 className='text-3xl'>Login</h2>
            <form onSubmit={handleSubmit}>
                <label className='block text-left ml-12' htmlFor="email">Email</label>
                <input className='border-black border-2 p-3 rounded-md w-9/12 h-10' type="email"  name="email" required/>
                <label className='block mt-4 text-left ml-12' htmlFor="password">Password</label>
                <input className='border-black p-2  rounded-md border-2 w-9/12 h-10' type="password"  name="password" required/>
                <button className='block w-9/12 rounded-md bg-red-500 mx-auto mt-5 h-10 text-white font-bold text-xl' type="submit">Submit</button>
                <p className='mt-3 text-md mb-2'>New to Quick Delivery?<Link className="mx-3 text-red-700 font-bold text-xl" to="/register">Register</Link></p>
                <button onClick={handleGooglesignin} className='block mb-12 w-9/12  rounded-md bg-amber-600 mx-auto mt-5 h-10 text-white font-bold text-xl' type="submit">Google</button>  
                
            </form>
        </div>
    );
};

export default Login;
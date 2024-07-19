import React from "react";
import brand from "../../Images/brand.png";
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="signin-header">
        <div className="container mx-auto flex justify-between items-center">
          <img 
            src={brand} 
            alt="Shop Smart" 
            style={{ width: "200px", height: "60px" }} 
          />
          <div>
            <button className="login-btn border border-black text-black py-2 px-4 rounded-md active:outline-none active:bg-black-600 focus:border-black-300 mr-4">
              Login
            </button>
          </div>
        </div>
      </header>
      <div className="background flex-grow flex items-center justify-center">
        <div className="signin-container bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-800 mb-2">Sign-in</p>
          <p className="text-gray-600">Login using your credentials</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 my-5 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";

const SignIn = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Your Logo</h1>
          <div>
            <button className="login-btn border border-black text-black py-2 px-4 rounded-md active:outline-none active:bg-black-600 focus:border-black-300 mr-4">
              Login
            </button>
            <button className="signup-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Sign up
            </button>
          </div>
        </div>
      </header>
      <div className="background flex-grow">
      <div className="flex-grow-1 bg-white p-8 rounded-lg shadow-md w-96 mt-4 mx-auto flex-1">
        <p className="text-gray-800 mb-2">
        Sign-in
        </p>
        <p className="text-gray-600">Login using your credentials</p>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Sign up
        </button>
      </div>
      </div>
    </div>
  );
};

export default SignIn;

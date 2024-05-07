import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Admindata from '../json/adminLogin.json';

function Admin() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [formData, setFormData] = useState([Admindata]);

  const checkLogIn = () => {
    const loginDetail = Admindata.filter((i) => i.userName == userName);
    if (loginDetail.length > 0) {
      if (loginDetail[0].password == password) {
        navigate('/dashboard');
      } else {
        alert("Password not match");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            {/* Boat Logo------------------- */}
            <img src= "https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" alt="logo" />
          </div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Welcome.</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              checkLogIn(); // Call your login function
            }}>
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    {/* Your SVG Icon */}
                  </span>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    id="design-login-email"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    {/* Your SVG Icon */}
                  </span>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
              >
                <span className="w-full">Submit</span>
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center shadow-2xl">
          <img
            className="hidden object-contain w-[70%] h-screen md:block"
            src="https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745"
            alt="your_image_alt"
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;

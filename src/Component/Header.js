  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Cart from "./Cart";

  function Header() {
    useEffect(() => {
      getCategoryData();
      getCustomerData();
    }, []);

    // Logic for Showlogin Form
    const [showLoginForm, setShowLoginForm] = useState(false);
    //fn
    const handleLoginButtonClick = () => {
      setShowLoginForm(true);
    };

    // Form validation

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const [customerData, setCustomerData] = useState([]);

    const getCustomerData = () => {
      axios.get("http://localhost:5002/api/customer").then((res) => {
        setCustomerData(res.data.data);
      });
    };

    const checkLogIn = () => {
      const customerList = customerData.filter((i) => i.number == number);
      if (customerList.length > 0) {
        if (customerList[0].password == password) {
          localStorage.setItem("loginInfo", number)
        } else {
          alert("password didn't match");
        }
      } else {
        alert("Number not registred");
      }
    };

    const [categoryData, setCategoryData] = useState([]);
    const getCategoryData = () => {
      axios
        .get("http://localhost:5002/api/category")
        .then((res) => setCategoryData(res.data.data));
    };
    const navigate = useNavigate();
    const [showCategory, setShowCategory] = useState(false);
    const [showCart, setShowCart] = useState(false);
    return (
      // HTML(JSX Starts from Here)
      <div>
        <Cart showCart={showCart} setShowCart={setShowCart}></Cart>
        {showCategory == true && (
          <div
            style={{ animation: showCategory == true && "category__anima 0.5s" }}
            onMouseLeave={() => setShowCategory(false)}
            className="fixed z-[1000] w-[90%] h-[45vh] bg-white flex flex-wrap top-20 left-[5%] p-6"
          >
            {categoryData.map((i) => (
              <div
                onClick={() => {
                  navigate("/products");
                  window.location.reload();
                  localStorage.setItem("category", i.name);
                }}
                className="lg:h-12 lg:w-[20%] cursor-pointer flex items-center gap-4"
              >
                <img className="h-10 w-10 " src={i.image}></img>
                <label className=" cursor-pointer text-[12px] font-semibold">
                  {i.name}
                </label>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-24 lg:p-6 p-4 lg:justify-evenly justify-between">
          <div className="flex items-center h-10 lg:w-24 gap-6">
            <i class="fa fa-bars fa-2x lg:hidden" aria-hidden="true"></i>
            <img
              className="w-[40%] lg:w-[100%]"
              onClick={() => navigate("/")}
              src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
            ></img>
          </div>
          <div className="lg:flex  hidden gap-10 ">
            <label
              className="cursor-pointer cat__animation"
              onMouseOver={() => setShowCategory(true)}
            >
              Categories <i class="fa fa-caret-down mx-1" aria-hidden="true"></i>
            </label>
            <label className="cursor-pointer ">boAt Personalisation</label>
            <label className="cursor-pointer">Gift with boAt</label>
            <label className="cursor-pointer">Corporate Orders</label>
            <label className="cursor-pointer">
              More{localStorage.getItem("search")}{" "}
              <i class="fa fa-caret-down mx-1" aria-hidden="true"></i>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center relative overflow-hidden">
              <i
                class="lg:block hidden fa fa-search absolute left-2"
                aria-hidden="true"
              ></i>
              <input
                value={localStorage.getItem("search")}
                onChange={(e) => {
                  navigate("/search");
                  localStorage.setItem("search", e.target.value);
                }}
                className="lg:block hidden pl-8 bg-gray-200 rounded-3xl py-2"
              ></input>
              <div className="absolute flex flex-col left-8 top-2 gap-2 search-animate">
                <label>
                  Search <span className="font-bold">"Speakers"</span>
                </label>
                <label>
                  Search <span className="font-bold">"Smartwatches"</span>
                </label>
                <label>
                  Search <span className="font-bold">"Earphones"</span>
                </label>
                <label>
                  Search <span className="font-bold">"Speakers"</span>
                </label>
              </div>
            </div>
            <i class="lg:hidden block fa fa-search fa-2x" aria-hidden="true"></i>

            <i
              onClick={() => handleLoginButtonClick()}
              class="fa fa-user-o text-[20px]"
              aria-hidden="true"
            ></i>
            <i
              onClick={() => setShowCart(true)}
              class="fa fa-shopping-bag fa-2x text-[20px]"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        {/* JSX for Login Form */}
        {showLoginForm == true ? (
          <div className="flex justify-center items-center w-[100%] h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50 ">
            <div
              style={{
                animation: showLoginForm
                  ? "pop-login .3s"
                  : "pop__out__login .3s",
              }}
              className="w-[50%] bg-white flex flex-col justify-center items-center gap-4 p-4 rounded-xl"
            >
              <div className="flex items-center relative w-[100%] justify-center">
                <h2 className="text-[24px] font-bold">Get started</h2>
                <i
                  // style={{
                  //   animation: showLoginForm ? "" : "pop__out__login .3s",
                  // }}
                  onClick={() => setShowLoginForm(false)}
                  class="fa fa-times text-[20px] absolute right-10"
                  aria-hidden="true"
                ></i>
              </div>
              <label>Please enter your Mobile Number to continue</label>
              <div className="bg-[#EFF4F7] flex flex-col gap-4 w-[90%] rounded-xl p-4 items-center">
                <label> Enter Mobile Number</label>
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-[50%] p-2 rounded-xl"
                  placeholder="+91 Type here"
                ></input>
                <label> Enter Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[50%] p-2 rounded-xl"
                  placeholder="Enter Password"
                ></input>
                <button
                  onClick={() => checkLogIn()}
                  className="font-bold bg-[#D0D9DE] rounded-xl w-[50%] p-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  export default Header;

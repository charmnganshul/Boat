import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Cart({ showCart, setShowCart }) {
  const navigate = useNavigate()
  useEffect(()=>{getCustomerData()},[])
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
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
        window.location.reload()
      } else {
        alert("password didn't match");
      }
    } else {
      alert("Number not registred");
    }
  };
  
  return (
    <div>
      {showCart === true ? (
        <div className=" z-[100] flex justify-center items-center w-[100%] h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50">
          <div className="cart bg-white flex flex-col items-center gap-4 h-[100vh] fixed right-0">
            <div className="flex  items-center p-4 relative w-[80%] justify-center">
              <label className="font-bold text-[20px] ">Your Cart</label>
              <i
                onClick={() => setShowCart(false)}
                class="fa fa-times text-[20px] absolute right-4"
                aria-hidden="true"
              ></i>
            </div>
            <div className="bg-[#EFF3F5] w-[90%] p-2 flex justify-between rounded-xl gap-4">
              <label className="font-bold text-[14px]">
                Sign in to Redeem boAt reward points on this order
              </label>
              <button className="bg-black px-5 text-[14px] w-[50%] rounded-xl text-white">
                Sign In Now
              </button>
            </div>
            <div className="flex justify-between w-[80%]">
              <div className="flex gap-2">
                <img
                  alt=""
                  className="w-[40%] bg-[#EFF3F5] rounded-xl "
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/74a6b20d-9842-49da-b279-022812b81e1f_160x.png?v=1673001663"
                ></img>
                <div className="flex flex-col font-bold">
                  <label>Stone 350</label>
                  <label>6,495</label>
                  <label className="bg-[#F7F9FA] p-1 text-center rounded-lg">
                    Red
                  </label>
                </div>
              </div>
              <div className="flex flex-col  w-[30%] justify-center items-end gap-4 p-2">
                <i class="fa fa-trash-o text-[20px]" aria-hidden="true"></i>
                <div className="flex rounded-xl ">
                  <label className="bg-[#EFF3F5] w-[80%] rounded-lg px-2">
                    +
                  </label>
                  <label>05</label>
                  <label className="bg-[#EFF3F5] w-[80%] rounded-lg px-2">
                    -
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-[80%] justify-between p-2 gap-10 font-semibold">
              <div className="flex">
                <div className="flex flex-col">
                  <label>rs. 9093</label>
                  <label className="text-[10px]">Inclusive of all taxes</label>
                </div>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <button onClick={()=>{
                if(localStorage.getItem("loginInfo") != ""){
                  navigate('/order')
                }
                else{
                  setShowCart(false)
                  setShowLoginForm(true)
                }
              }} className="bg-black w-[60%] text-white font-bold rounded-xl">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      ) : null}
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

export default Cart;

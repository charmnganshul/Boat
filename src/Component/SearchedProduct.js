import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Neckband() {
  useEffect(() => {
    getProductDetails();
  }, []);
  //
  const Navigate = useNavigate();
  //
  const [productList, setProductList] = useState([]);
  const getProductDetails = () => {
    axios
      .get("http://localhost:5002/api/product")
      .then((res) => setProductList(res.data.data));
  };
  return (
    <div className="flex justify-center py-10">
      <div className="w-[90%] flex flex-col gap-6  rounded-xl">
        <h1 className="text-[24px] font-bold">
          boAt Rockerz — Bluetooth Neckbands Earphones
        </h1>
        <div className=" flex justify-between">
          <div>
            <button className="bg-gray-300 px-6 py-2 rounded-lg cursor-pointer">
              Filter By <i class="fa fa-caret-down mx-1" aria-hidden="true"></i>
            </button>
          </div>

          <button className="bg-gray-300 px-6 py-2 rounded-lg cursor-pointer">
            Sort By{localStorage.getItem("category")} <i class="fa fa-caret-down mx-1" aria-hidden="true"></i>
          </button>
        </div>

        <div className="w-[100%]  flex flex-wrap gap-4">
          {productList
            .filter((i) => i.productName.toUpperCase().includes(localStorage.getItem("search").toUpperCase()))
            .map((i) => (
              <div onClick={()=>{Navigate("/productdetail"); localStorage.setItem("productdetail",JSON.stringify(i))}} className="flex gap-10 w-[31%] p-2 bg-[#FAF9F6] shadow-xl rounded-xl">
                <div className="flex flex-col w-[40%] rounded-xl gap-8 ">
                  <img  src={i.images[0]} alt="None"></img>
                  <label className="bg-yellow-400 text-center font-bold rounded-xl">
                    8 Hours Playback
                  </label>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <i class="fa fa-star text-[#FFD700]" aria-hidden="true"></i>
                    <span>4.8| 1074</span>
                  </div>
                  <div className="flex flex-col font-bold ">
                    <label>{i.productName}</label>
                    <div className="flex gap-4">
                      <label>999</label>
                      <span>{i.price}</span>
                      <span>{i.discount}% off</span>
                    </div>
                    <div className="bg-gray-200 h-[1px] w-[90%]"></div>
                    <div className="flex gap-4 text-[10px]">
                      <label>10mm drivers</label>
                      <label>Fast Charging</label>
                    </div>
                  </div>
                  <button className="text-white font-bold bg-black px-2 py-2 rounded-xl my-10">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Neckband;

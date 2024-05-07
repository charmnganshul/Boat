import React, { useState } from "react";

function BestSeller() {

  return (
    <div className="p-10 flex flex-col gap-4">
      <label className="text-[24px] font-semibold">Explore Bestselle<span className="underline decoration-red-600 font-bold">rs</span></label>
      <div className="lg:w-[100%] w-[100%] overflow-scroll scrollX">
      <div className="flex flex-col justify-center items-center gap-4 lg:w-[100%] w-[200%]">
        <div className="flex lg:flex-row  items-center gap-4">
          <div className=" flex flex-col items-center w-[30%] gap-2">
             <img alt="" className="rounded-xl shadow-xl" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745"></img>
            <label className="font-bold">SmartWatches</label>
          </div>
          <div className=" flex flex-col items-center w-[30%] gap-2">
             <img alt="" className="rounded-xl shadow-xl" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049"></img>
            <label className="font-bold">Wireless Earbuds</label>
          </div>
          <div className=" flex flex-col items-center w-[30%] gap-2">
             <img alt="" className="rounded-xl shadow-xl" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917"></img>
            <label className="font-bold">Neckbands</label>
          </div>
          <div className=" flex flex-col items-center w-[30%] gap-2">
             <img alt="" className="rounded-xl shadow-xl" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-255-Max.jpg?v=1682579854"></img>
            <label className="font-bold">Headphones</label>
          </div>
        </div>
      </div>
      </div>
      
      
    </div>
  );
}

export default BestSeller;

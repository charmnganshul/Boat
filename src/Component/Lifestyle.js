import axios from "axios";
import React, { useEffect, useState } from "react";

function Lifestyle() {
  useEffect(() => {
    getLifestyledata();
  }, []);
  // Http Request to get data
  const [lifestyleData, setLifeStyleData] = useState([]);
  const getLifestyledata = () => {
    axios
      .get("http://localhost:5002/api/lifestyle")
      .then((res) => setLifeStyleData(res.data.data));
  };

  return (
    <div className="p-10 flex flex-col gap-4">
      <label className="text-[24px] font-semibold">
        Shop by Lifesty
        <span className="underline decoration-red-600 font-bold">le</span>
      </label>
      <div className="w-[160%] lg:w-[100%] overflow-scroll scrollX">
      <div className="flex flex-row items-center justify-between gap-4 lg:w-[100%] w-[200%]">
        {lifestyleData.map((i) => (
          <div className="lg:w-[25%] w-[90%]">
            <img alt="" src={i.image}></img>
            <div className="bg-[#EFF4F7] flex flex-col text-center rounded-br-xl rounded-bl-xl gap-2 p-2">
              <label className="text-[20px] font-bold">{i.tag}</label>
              <label className="text-[#2F5B96] font-semibold">
                View All{" "}
                <i
                  class="fa fa-arrow-right border-2 rounded-full p-1 "
                  aria-hidden="true"
                ></i>
              </label>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default Lifestyle;

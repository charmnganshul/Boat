import axios from "axios";
import React, { useEffect, useState } from "react";

function Category() {
  useEffect(() => {
    getCategoryData();
  }, []);
  const [categoryData, setCategoryData] = useState([]);
  const getCategoryData = () => {
    axios
      .get("http://localhost:5002/api/category")
      .then((res) => setCategoryData(res.data.data));
  };
  return (
    <div className="p-10 flex flex-col gap-16">
      <label className="text-[24px] font-semibold">
        Shop by Categori
        <span className="underline decoration-red-600 font-bold">es</span>
      </label>
      <div className="w-[100%] overflow-scroll scrollX ">
      <div className="flex gap-2 w-[120%] items-center">
        {categoryData.map((i) => (
          <div className="flex flex-col justify-center items-center">
            <img className=" w-[60%]" alt="" src={i.image}></img>
            <label className="text-[14px] font-bold w-[50%] text-center">{i.name}</label>
          </div>
        ))}{" "}
      </div>
      </div>
      
    </div>
  );
}

export default Category;

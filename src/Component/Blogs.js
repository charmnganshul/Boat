import axios from "axios";
import React, { useEffect, useState } from "react";

function Blogs() {
  useEffect(() => {
    getBlogData();
  }, []);

  const [blogData, setBlogData] = useState([]);

  const getBlogData = () => {
    axios
      .get("http://localhost:5002/api/blog")
      .then((res) => setBlogData(res.data.data));
  };
  return (
    <div className="p-10 flex flex-col gap-4">
      <label className="text-[24px] font-semibold">
        Blog<span className="underline decoration-red-600 font-bold">s</span>
      </label>
      <div className="flex gap-2">
        <button className="bg-[#ECF0F4] rounded-3xl px-4 cursor-pointer py-2 font-bold">
          Popular
        </button>
        <button className="bg-[#ECF0F4] rounded-3xl px-4 cursor-pointer py-2 font-bold">
          Latest
        </button>
      </div>
      <div className="lg:w-[100%] w-[160%] overflow-scroll scrollX">
      <div className="flex flex-row gap-4 lg:w-[100%] w-[140%]">
        {blogData.map((i) => (
          <div className="flex flex-col lg:w-[25%] w-[100%] rounded-xl gap-2">
            <img
              className="rounded-tr-xl rounded-tl-xl cursor-pointer"
              src={i.image}
              alt=""
            ></img>
            <div className="flex flex-col gap-2 p-2 bg-[#FAFAFA] rounded-bl-xl rounded-br-xl">
              <span>23 sep, 2023</span>
              <label className="text-[18px] font-bold">
                The Power of Personalisation: Custom Watch Faces in...
              </label>
              <p>
                Check out how with our DIY Watch Face Studio and customisable
                watch faces are
              </p>
              <div className="flex rounded-3xl justify-center bg-[#FFFFFF] px-6 py-2 font-bold">
                <button>
                  Read More{" "}
                  <i
                    class="fa fa-arrow-right border-2 rounded-full p-1 "
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default Blogs;

import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
  const [dropDown, setDropDown] = useState(0);
  return (
    <div className="w-64">
        {/*sidenav */}
        <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
          <a
            href="#"
            className="flex items-center pb-4 border-b border-b-gray-800"
          >
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"></img>
          </a>
          <ul className="mt-4">
            <span className="text-gray-400 font-bold">ADMIN</span>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="ri-home-2-line mr-3 text-lg" />
                <span className="text-sm">Dashboard</span>
              </a>
            </li>
            <div className=" cursor-pointer font-semibold flex flex-col   ">
              <div
                onClick={() => {
                  if (dropDown == 1) {
                    setDropDown(0);
                  } else {
                    setDropDown(1);
                  }
                }}
                className={`${
                  dropDown == 1 && "bg-black"
                } ${dropDown==1 && "text-white"} hover:bg-black hover:text-[white] py-2 px-4 flex rounded-[5px]`}
              >
                <i className="ri-home-2-line mr-3 text-lg" />
                <label>Product</label>
                <i
                  className={`ri-arrow-right-s-line ml-auto transition-all ${
                    dropDown == 1 && "rotate-90"
                  }`}
                />
              </div>
              {dropDown == 1 && (
                <div className="ml-8 py-2 flex flex-col gap-2">
                  <div onClick={()=>navigate('/productlist')} className="drop-list flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                    <label>Product List</label>
                  </div>
                  <div onClick={()=>navigate('/add-Product')} className="drop-list flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                    <label>Add Product</label>
                  </div>
                </div>
              )}
            </div>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-list-ul mr-3 text-lg" />
                <span className="text-sm">Activities</span>
              </a>
            </li>
            <span className="text-gray-400 font-bold">BLOG</span>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
              >
                <i className="bx bxl-blogger mr-3 text-lg" />
                <span className="text-sm">Post</span>
                <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
              </a>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                <li className="mb-4">
                  <a
                    href=""
                    className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    All
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-archive mr-3 text-lg" />
                <span className="text-sm">Archive</span>
              </a>
            </li>
            <span className="text-gray-400 font-bold">PERSONAL</span>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-bell mr-3 text-lg" />
                <span className="text-sm">Notifications</span>
                <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
                  5
                </span>
              </a>
            </li>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-envelope mr-3 text-lg" />
                <span className="text-sm">Messages</span>
                <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
                  2 New
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" />
        {/* end sidenav */}
      
    </div>
  )
}

export default Sidebar

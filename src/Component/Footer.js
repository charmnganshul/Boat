import React from "react";

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="p-10 lg:flex lg:flex-row flex flex-col gap-32 bg-[#E7F0F5] w-[98%] shadow-xl ">
        <div className="flex flex-col gap-4 ">
          <img
            className="w-[50%]"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg"
            alt=""
          ></img>
          <label className="text-[24px] font-bold">
            Subscribe to our email alerts!
          </label>
          <input
            className="px-5 py-3  rounded-xl"
            placeholder="enter your email address"
          ></input>
        </div>
        <div className="flex gap-32">
          <ul className="flex flex-col gap-4">
            <li className="text-[16px] font-bold">
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">True Wireless Earbuds</a>
            </li>
            <li>
              <a href="#">Wireless Headphones</a>
            </li>
            <li>
              <a href="#">Wired Headphones</a>
            </li>
            <li>
              <a href="#">Wireless Speakers</a>
            </li>
            <li>
              <a href="#">Home Audio</a>
            </li>
            <li>
              <a href="#">Mobile Accessories</a>
            </li>
            <li>
              <a href="#">Smart Watches</a>
            </li>
            <li>
              <a href="#">TRebel</a>
            </li>
            <li>
              <a href="#">Misfit Trimmers</a>
            </li>
            <li>
              <a href="#">Refer & Earn</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-[16px] font-bold">
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Warranty & Support</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Service Centers</a>
            </li>
            <li>
              <a href="#">Bulk Orders</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Why Buy Direct</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-[16px] font-bold">
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">About boAt</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Read Our Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Social Responsibility</a>
            </li>
            <li>
              <a href="#">Warranty Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

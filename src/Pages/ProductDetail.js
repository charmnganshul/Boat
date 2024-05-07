import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Social from "../Component/Social";
import Cart from "../Component/Cart";

function ProductDetail() {
  const productData = localStorage.getItem("productdetail");
  const productObject = JSON.parse(productData);

  //
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header></Header>
      <Cart showCart={showCart} setShowCart={setShowCart}></Cart>
      <div className="h-[2px] w-[100%] bg-[#F2F2F2] items-center justify-center"></div>
      <div className="flex gap-8 p-6">
        <div className="vertical-images w-[5%] flex flex-col gap-6">
          <img src="https://www.boat-lifestyle.com/cdn/shop/products/74a6b20d-9842-49da-b279-022812b81e1f_600x.png?v=1673001663"></img>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/original-imageh82ynquh4cz_1_416x.webp?v=1686204369"></img>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/original-imageh82ynquh4cz_1_416x.webp?v=1686204369"></img>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/original-imageh82ynquh4cz_1_416x.webp?v=1686204369"></img>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/original-imageh82dgzx2wmm_1_416x.webp?v=1686204370"></img>
        </div>
        <div className="shadow-xl rounded-xl w-[45%] bg-red-400">
          <img
            className="w-[100%] rounded-xl"
            src={productObject.images[0]}
            alt=""
          ></img>
        </div>
        <div className="flex flex-col gap-6 p-6 w-[50%]">
          <div className="flex items-center gap-2">
            <i class="fa fa-star text-[#FFD700]" aria-hidden="true"></i>
            <span>4.8| 1074</span>
          </div>
          <h2 className="text-[26px] font-bold">{productObject.productName}</h2>
          <p>
            Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime,
            Lightweight Design, BT, TF Card & AUX Compatible
          </p>
          <label>{productObject.price}</label>
          <p>Choose your Color: Red</p>
          <div className="flex text-[32px] gap-4">
            <div className="h-8 w-8 rounded-full bg-red-600"></div>
            <div className="h-8 w-8 rounded-full bg-green-600"></div>
            <div className="h-8 w-8 rounded-full bg-blue-600"></div>
          </div>
          <div className="flex flex-col gap-6">
            <label>Check Delivery</label>
            <div className="bg-[#F2F5F9] flex flex-col p-4 rounded-xl w-[50%] gap-2">
              <div className="bg-white py-2 flex justify-around">
                <input placeholder="483501"></input>
                <button className="bg-black text-white font-bold px-4 py-1 rounded-lg">
                  Change
                </button>
              </div>
              <label>Free delivery | By Saturday, 30 Mar</label>
              <label>If ordered within 23 hrs 48 mins</label>
            </div>
          </div>

          <button
            onClick={() => setShowCart(true)}
            // onClick={() => handleClick(props)}
            className="bg-black text-white font-bold w-[50%] px-4 py-2 rounded-xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <Footer></Footer>
      <Social></Social>
    </div>
  );
}

export default ProductDetail;

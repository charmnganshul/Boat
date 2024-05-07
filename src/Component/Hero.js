import React, { useState } from "react";
function Hero() {
  const [currentimageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://www.boat-lifestyle.com/cdn/shop/files/Airdopes_Supreme_Banner_WEB_1600x.jpg?v=1711261317",
    "https://www.boat-lifestyle.com/cdn/shop/files/Homepage_Banner___Liquidation_Product_WEB_1600x.jpg?v=1710316754",
    "https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_2_1440x.png?v=1707810457",
    "https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="image-carousel relative z-[-2]">
      <img src={images[currentimageIndex]} alt=""></img>
      <div className="absolute top-[50%] text-white flex justify-between gap-[95vw] w-[98%]">
        <i
          onClick={prevImage}
          className="fa fa-chevron-left fa-2x"
          aria-hidden="true"
        ></i>
        <i
          onClick={nextImage}
          class="fa fa-chevron-right fa-2x"
          aria-hidden="true"
        ></i>
      </div>
      <div className="absolute flex gap-4 left-[48%] bottom-4 p-1 rounded-[20px] bg-slate-400 bg-opacity-[0.5]">
        <div style={{backgroundColor:currentimageIndex==0 ? "black": 'white'}} className="w-3 h-3 rounded-full"></div>
        <div style={{backgroundColor:currentimageIndex==1 ? "black": 'white'}} className="w-3 h-3 rounded-full"></div>
        <div style={{backgroundColor:currentimageIndex==2 ? "black": 'white'}} className="w-3 h-3 rounded-full"></div>
        <div style={{backgroundColor:currentimageIndex==3 ? "black": 'white'}} className="w-3 h-3 rounded-full"></div>
      </div>
    </div>
  );
}

export default Hero;

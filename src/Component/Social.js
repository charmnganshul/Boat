import React from "react";

function Social() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="flex flex-col gap-4 items-center w-[98%] bg-[#E7F0F5] shadow-xl p-8">
        <div className="flex justify-between items-center gap-4 font-bold text-[16px]">
          <label>Let's get Social</label>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-youtube" aria-hidden="true"></i>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </div>
        <div className="text-[12px] text-center flex gap-6">
          <label>Privacy Policy</label>
          <label>Term & Conditions</label>
        </div>
        <label>© 2024 Imagine Marketing Limited. All Rights Reserved.</label>
        <label className="text-center w-[70%]">
          For queries contact us: Manager, Imagine Marketing Limited Unit no.
          204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri
          Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
        </label>
      </div>
    </div>
  );
}

export default Social;

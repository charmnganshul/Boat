import React from 'react'

function Press() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <label className="text-[24px] font-semibold">
        In the Pre
        <span className="underline decoration-red-600 font-bold">ss</span>
      </label>
      <div className='lg:flex lg:flex-row flex flex-col bg-[#F7F9FA] lg:h-[30vh] h-[50vh]'>
        <div className='lg:w-[40%] w-[98%] flex justify-center items-center bg-[#D0D9DE]'>
        <img className='h-20' src='https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093'></img>
        </div>
        
        <div className='lg:w-[60%] w-[98%] p-12 text-center flex items-center'>
            <p className='text-[24px]'>boAt is the first Company from the customer lifetstyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP </p>
        </div>
      </div>
    </div>
  )
}

export default Press

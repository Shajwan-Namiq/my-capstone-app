import React from 'react'
import { GiOfficeChair  } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { GiSofa } from "react-icons/gi";
import { BiChair } from "react-icons/bi";
import { MdCountertops } from "react-icons/md";
 

export default function Features() { 
  return (
    <div>
      <div className="px-5 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-48 lg:py-10">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="flex justify-center mt-20 mb-20  text-2xl text-slate-600 font-bold">
            To
            <span className="border-b-4 border-orange-400">p Categ</span>
            ory
          </h1>
        </div>
        <div className=" grid grid-cols-3 gap-1 row-gap-5 mb-10  md:grid-cols-3 lg:grid-cols-5">
          <div className="text-center hover:text-orange-400   transform hover:scale-125 transition duration-300 ease-in-out ">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#e5e5e5] sm:w-24 sm:h-24">
              <GiOfficeChair size={35} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-slate-900">
              Office
            </h6>
          </div>
          <div className="text-center hover:text-orange-400  transform hover:scale-125 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#e5e5e5] sm:w-24 sm:h-24">
              <IoIosBed size={35} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-slate-900">
              Bedroom
            </h6>
          </div>
          <div className="text-center hover:text-orange-400  transform hover:scale-125 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#e5e5e5] sm:w-24 sm:h-24">
              <GiSofa size={35} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-slate-900">
              Living Room
            </h6>
          </div>
          <div className="text-center hover:text-orange-400  transform hover:scale-125 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#e5e5e5] sm:w-24 sm:h-24">
              <BiChair size={35} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-slate-900">
              Dining
            </h6>
          </div>
          <div className="text-center hover:text-orange-400 transform hover:scale-125 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#e5e5e5] sm:w-24 sm:h-24">
              <MdCountertops size={35} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-slate-900">
              Kitchen
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

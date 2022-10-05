import React from 'react'
import { useState } from "react";
import "./stylebanner.css";
import EShoplogo from "../../images/Eshoplogo.png";
import salea from "../../images/salea.png";
import saleb from "../../images/saleb.png";
import salec from "../../images/salec.png";
import saled from "../../images/saled.png";

export default function Banner() {
   const [text, setText] = useState("%50");

  
  
  
  
    return (
      <div>
        <section className=" ">
          <div className="banner">
            <div className="text-lg lg:text-6xl font-bold mt-6  text text1 banner-animation">
              Find The Best Price From Here
            </div>
            <div className="text-base  lg:text-4xl font-bold mt-28 lg:mt-36  text text2 bannon  ">
              " Thank you for shopping with us "
            </div>
            <div className="text-xl lg:text-6xl font-bold text text3  m-16 flex justify-center items-center">
              Get off &nbsp;{" "}
              <p className="bg-slate-900 rounded-full p-5"> {text}</p>
            </div>

            <div className="flex">
              <div className="image image2">
                <img src={saleb} className="w-48 h-48 mt-3 mx-28 " />
              </div>
              <div className="image image3">
                <img src={salea} className="w-32 h-32  mx-5 lg:mx-10 " />
              </div>
              <div className="image image4">
                <img src={saled} className="w-32 h-32   " />
              </div>
            </div>

            <div className="m-3 flex  relative ">
              <img
                src={EShoplogo}
                className="absolute top-0 right-0 w-20 h-20 lg:w-32 lg:h-32 "
              />
            </div>
          </div>
        </section>
      </div>
    );
}

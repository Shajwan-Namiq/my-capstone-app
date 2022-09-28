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
        <section className="mx-5">
          <div class="banner">
            <div class="text-lg lg:text-6xl font-bold mt-6  text text1 banner-animation">
              Find The Best Price From Here
            </div>
            <div class="text-base  lg:text-4xl font-bold mt-28 lg:mt-36  text text2 bannon  ">
              " Thank you for shopping with us "
            </div>
            <div class="text-xl lg:text-6xl font-bold text text3  m-16 flex justify-center items-center">
              Get off {text}
            </div>

            <div className="flex">
              <div class="image image2">
                <img src={saleb} className="w-48 h-48 mt-3 mx-28 " />
              </div>
              <div class="image image3">
                <img src={salea} className="w-32 h-32  mx-10 " />
              </div>
              <div class="image image4">
                <img src={saled} className="w-32 h-32   " />
              </div>
            </div>

            <div class="m-3 flex  relative ">
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

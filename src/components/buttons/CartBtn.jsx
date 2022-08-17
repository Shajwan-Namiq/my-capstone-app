import React from "react";
 

function CartBtn() {
  return (
    <>
      <div class="flex justify-center md:block">
        <button type="button" 
          class="relative text-orange-400 transition-colors duration-200 transform dark:text-orange-400 hover:text-gray-600 dark:hover:text-gray-300"
          href=""
        >
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default CartBtn;





/**
 * import React from 'react'
import {NavLink} from 'react-router-dom'
 import { FaShoppingCart } from "react-icons/fa";

function CartBtn() {
  return (
    <>
      <div className="mt-3 flex flex-shrink-0 flex-wrap items-center lg:inline-block md:inline-block ">
        <NavLink
          to="/cart"
          className="btn flex flex-row justify-center w-full px-4 py-2.5 border text-slate-200  rounded-md shadow hover:bg-[#081927]"
        >
          <FaShoppingCart className="mx-2" /> Cart(0)
        </NavLink>
      </div>


    </>
  );
}

export default CartBtn

 */
import React from 'react'
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

import React from 'react'
import {NavLink} from 'react-router-dom'
 import { FaShoppingCart } from "react-icons/fa";

function CartBtn() {
  return (
    <>
      <div className="mt-3 flex flex-shrink-0 flex-wrap items-center lg:inline-block md:inline-block ">
        <NavLink
          to="/cart"
          className="btn flex flex-row justify-center w-full px-4 py-2.5 bg-slate-50 text-gray-800  rounded-md shadow hover:bg-slate-500"
        >
          <FaShoppingCart  className='mx-2'/> Cart()
        </NavLink>
      </div>
    </>
  );
}

export default CartBtn

import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function CartItem({ id, company, name, colorschange, price, quantity = 0 }) {
  const dispatch = useDispatch();

   
    
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex shadow-md  first-letter:">
          <div className="w-full bg-white px-10 py-5">
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/4">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/4  ">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/4 ">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/4 ">
                Remove
              </h3>
            </div>

            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/4">
                {/* <div className="w-20">
                  <img className="" src={image} alt="item" />
                 </div>*/}
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-slate-900 text-sm">
                    {" "}
                    Name product: {name}
                  </span>

                  <span className="font-bold text-slate-900  text-xs">
                    Company Name : {company}
                  </span>

                  <div class="flex">
                    <div class="mt-4  font-bold text-slate-900  text-xs">
                    Color :
                    </div>
                    <div
                      style={{ backgroundColor: colorschange }}
                      className="ml-4 mt-2 h-10 w-10 rounded"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="lg:mr-7 flex justify-center w-1/4">
                <button onClick={() => dispatch(decrementQuantity(id))}>
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <p className="mx-2 border text-center w-8"> {quantity} </p>

                <button onClick={() => dispatch(incrementQuantity(id))}>
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>

              <span className="lg:mr-7  text-center w-1/5 font-semibold text-sm">
                $ {price}
              </span>
              <div className="flex justify-center w-1/4">
                <button
                  className="  font-semibold hover:text-red-900 text-red-600 text-xs"
                  onClick={() => dispatch(removeItem(id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;

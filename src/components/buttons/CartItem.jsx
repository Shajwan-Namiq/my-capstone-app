import {incrementQuantity,decrementQuantity,removeItem,} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
  

function CartItem({
  id,
  company,
  name,
  colorschange,
  price,
  imageshow,
  quantity = 0,
}) {
  const dispatch = useDispatch();
  
  const [newPrice, Setnewprice] = useState(price);

//find total pricr for each product
useEffect(() => {
  if(quantity) {
  const x = price * quantity;
   Setnewprice(x);
  }
}, );

    
  



  return (
    <>
      <div className="container mx-auto ">
        <div className="flex shadow-md">
          <div className="w-full bg-[#d9d9d92e]  px-10 py-5">
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

            <div className="flex items-center hover:bg-gray-200 -mx-8 px-6 py-5">
              <div className="flex w-2/4">
                <div className="w-24">
                  <img className="h-24" src={imageshow} alt="item" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="uppercase font-bold text-xs lg:text-xl text-slate-900 ">
                    {name}
                  </span>

                  <span className="font-bold  text-xs lg:text-xl text-gray-600">
                    {company}
                  </span>

                  <div className="flex">
                    <span className="mt-4 font-bold  text-xs text-gray-600 ">
                      Color:
                    </span>

                    <div
                      style={{ backgroundColor: colorschange }}
                      className="ml-2 mt-3 lg:mt-2 w-5 h-5 lg:h-7 lg:w-7 rounded"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="lg:mr-5  flex justify-center w-1/4">
                <button onClick={() => dispatch(decrementQuantity(id))}>
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <p className="mx-2 border-2  text-center w-5 h-6">
                  {" "}
                  {quantity}{" "}
                </p>

                <button onClick={() => dispatch(incrementQuantity(id))}>
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>

              <span className="lg:mr-7 text-orange-400 text-center w-1/5 font-semibold lg:text-xl">
                $ {newPrice}
              </span>

              

              <div className="flex justify-center w-1/4">
                <button
                  className="font-semibold hover:text-red-900 text-red-600 text-xs"
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
        <hr />
      </div>
    </>
  );
}

export default CartItem;

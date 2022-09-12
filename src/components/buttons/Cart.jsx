import React from 'react'
import { useSelector } from "react-redux";
import Product from "../Product";
 
export default function Cart() {
   
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </>
  );
}

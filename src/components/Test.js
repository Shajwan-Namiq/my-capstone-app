import React from 'react'

export default function Test() {
  return (
    <>
      <div class="group relative w-96">
        <img
          class="w-full object-cover"
          src="https://www.kindacode.com/wp-content/uploads/2022/06/t-shirt-example.png"
        />
        <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          <h1 class="text-2xl text-white">Fiction T-Shirt Store</h1>
          <a
            class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
            href="#"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </>
  );
}

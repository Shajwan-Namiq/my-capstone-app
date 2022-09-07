import React from 'react'
import { Link } from "react-router-dom";

export default function Section() {


  return (
    <div>
      <section className=" text-gray-400 bg-[#e5e5e557] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="mt-10 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-900">
              Read this section
              <br className="hidden lg:inline-block" />
              Before Buy anything
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate iusto ut modi veniam vel, maxime consequuntur cupiditate rerum! Voluptate eos, similique excepturi assumenda sapiente impedit inventore consectetur quae rem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque distinctio, enim a perspiciatis beatae id facilis? Laudantium maiores error minima, officiis voluptatem voluptas cum? Accusamus possimus architecto quaerat accusantium laboriosam?Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              Lorem.
            </p>
            <div className="flex justify-center">
              <Link
                to="./Products"
                className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded text-lg"
              >
                Shopping Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

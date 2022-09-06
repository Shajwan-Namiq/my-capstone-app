import React from 'react'
import { Link } from "react-router-dom";

export default function Section() {
  return (
    <div>
      <section class="text-gray-400 bg-[#e5e5e557] body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-900">
              Read this section
              <br class="hidden lg:inline-block" />
             Before Buy anything
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <Link
                to="./Products"
                class="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded text-lg"
              >
                Shoping Now 
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

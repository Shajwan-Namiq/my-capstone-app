import React from 'react'
import sofa from "./images/sofa.png"; 



export default function About() {
  return (
    <>
      <section class=" flex flex-col justify-center antialiased  min-h-screen">
        <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a class="relative block group" href="#0">
              <div
                class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-14 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src={sofa}
                  width="540"
                  height="400"
                  alt="Blog post"
                />
              </figure>
            </a>
            <div>
              <header>
                <h3 class="mt-30 text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a
                    class="text-slate-900 hover:text-gray-700 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    <h1 className="border-b-4 border-zinc-300 text-2xl text-slate-600 font-bold">
                      About Us
                    </h1>
                  </a>
                </h3>
              </header>
              <p class="text-lg text-gray-600 flex-grow">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                deleniti, veniam tenetur quia sed molestiae temporibus at nisi,
                quod facere nulla vero rem id laboriosam delectus iure possimus
                animi! Reiciendis! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Illum quae iure aperiam iusto quas cumque
                mollitia dolor, alias non ab in facilis, aliquid amet libero
                recusandae voluptatem ad nostrum rerum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Incidunt soluta accusantium
                ut quibusdam, suscipit molestiae hic nihil corporis deleniti
                quia quidem voluptatum error dignissimos a qui nisi cum quisquam
                architecto! Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. 
              </p>
             
             
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                    width="40"
                    height="40"
                    alt="Author 04"
                  />
                </a>
               
                <div>
                  <a
                    class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Chris Solerieu
                  </a>
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Aug 16, 2022</span>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
import React from 'react'
import sofa from "./images/sofa3.jpg"; 

export default function About(){
 
  return (
    <>
      <section className=" flex flex-col justify-center antialiased min-h-screen">
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a className="mt-12 md:mt-12 lg:mt-0 relative block group" href="#0">
              <div
                className="absolute inset-0 bg-orange-400 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-8 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <div
                className="absolute inset-0 bg-[#e9ecef] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-5 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src={sofa}
                  width="540"
                  height="400"
                  alt="sofa"
                />
              </figure>
            </a>

            <div>
              <header>
                <h3 className="mt-30 text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a
                    className="text-slate-900 hover:text-gray-700 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    <h1 className="border-b-4 border-[#081927] text-2xl text-slate-600 font-bold">
                      About Us
                    </h1>
                  </a>
                </h3>
              </header>
              <p className="text-lg text-gray-600 flex-grow">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas possimus necessitatibus cumque doloribus deserunt et, voluptates, nisi aut deleniti sit eaque quia explicabo vero hic atque aspernatur iste nihil placeat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sed officiis expedita veniam! Tenetur blanditiis illo repellendus aliquam provident cum, nihil non, assumenda officia ullam neque in ab. Id, quod!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum aperiam tempore facilis veniam explicabo dolorem delectus eaque est beatae. Ea, voluptates error fugiat in maiores consectetur culpa illum? Veniam.
              </p>

              <footer className="flex items-center mt-4">
                <a href="#0">
                  <img
                    className="rounded-full flex-shrink-0 mr-4"
                    src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                    width="40"
                    height="40"
                    alt="Author 04"
                  />
                </a>

                <div>
                  <a
                    className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Chris Solerieu
                  </a>
                  <span className="text-gray-700"> - </span>
                  <span className="text-gray-500">Aug 16, 2022</span>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
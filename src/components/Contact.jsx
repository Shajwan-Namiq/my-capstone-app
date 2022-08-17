import React from 'react'

export default function Contact() {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <div className="google-map-code">
            <iframe
              title="myMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103859.64373339365!2d45.30744274520391!3d35.563237443938874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002c0536d143b1%3A0xf791750d4e215dea!2sSulaymaniyah!5e0!3m2!1sen!2siq!4v1660720191099!5m2!1sen!2siq"
              width="100%"
              height="100%"
              class="absolute inset-0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-[#ebebebda] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h1 className="text-2xl text-slate-600 font-bold">Contact Us</h1>
            <p class="leading-relaxed mb-5 text-gray-600">
              For more information, please fill in this form
            </p>
            <div class="relative mb-4">
              <input
                type="text"
                placeholder="UserName"
                id="username"
                name="username"
                class="w-full bg-white rounded border border-orange-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-orange-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                class="w-full bg-white rounded border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

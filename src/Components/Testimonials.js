// we will create the basic structure of each React component and export it from that file with export default And finally make sure to import it back in App.js:

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

// These are going to consist of a couple of cards that feature the testimonial itself as well as who it's from and the company that this person is from.

// We are also importing a testimonials array with a number of objects that feature the quote, image, name, and company

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 text-white" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-blue-600 mb-4" />
                <p className="leading-relaxed mb-6 text-blue-600">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-blue-600">
                      {testimonial.name}
                    </span>
                    <span className="text-blue-600 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
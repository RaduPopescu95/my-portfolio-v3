
import React, { useEffect } from "react";
import Content from "../Content";
import Typical from 'react-typical'

export default function About() {

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="animate-fade-in-up font-bold sm:text-3xl text-3xl font-medium text-black">
            {Content.header.text[0]}
            <br className="hidden lg:inline-block" />
          </h1>
             <Typical
                steps={Content.header.typical}
                loop={1}
                className="font-bold sm:text-2xl text-3xl mb-4 font-medium text-gray-800 lg:inline-block"
               />
          
          {/* <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p> */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-black rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="rounded-full"
            alt="hero"
            src="./image.jpg"
          />
        </div>
      </div>
    </section>
  );
}

// For the image on the righthand side of the section, I am using an svg file from the public folder, coding.svg.

// This image serves merely as a temporary placeholder. I would highly recommend using an actual image of yourself. 
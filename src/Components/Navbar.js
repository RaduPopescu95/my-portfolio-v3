import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import content from "../Content"


export default function Navbar() {
  return (
    <header   className="md:sticky top-0 z-10">
      <div style={{
      background:"#091c29"
    }}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          <h1 className="text-2xl title-font mr-5 font-bold text-white mb-4 md:mb-0" > <span className="w-1 h-4 bg-red-500 inline-block rounded-full"></span> {content.nav.nume} <span className="w-1 h-4 bg-red-500 inline-block rounded-full"></span>  </h1>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-gray-600">
            Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-gray-600">
            Skills
            </a>
            <a href="#testimonials" className="mr-5 hover:text-gray-600">
            Testimonials
            </a>
          </nav>
          <a
            href="#contact"
            className="animate-pulse inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
    
      </div>
    </header>
  );
}
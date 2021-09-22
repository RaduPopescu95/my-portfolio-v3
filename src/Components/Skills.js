

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Content from "../Content";
import { skills } from "../data";

export default function Skills() {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center font-dosis">
          <ChipIcon className=" text-gray-900 w-10 inline-block mb-4" />
          <h1 className="text-gray-900 text-5xl font-bold">
            Skills &amp; Technologies
          </h1>    
          <div className = "flex flex-wrap justify-center mt-10">
            {Content.stack.tech.map((tech,index)=>{
              return <span className = "animate-fade-in-up w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
                <LazyLoadImage src = {tech.img} alt={tech.alt}/>
              </span>
            })}
          </div>
          <p className = "text-gray-900 w-11/12 md:max-w-xl text-xl text-center mt-10">
            {Content.stack.desc}
          </p>
    </div>
  );
}
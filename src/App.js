

// src/App.js
import React from "react";
// Import components from components folder
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";

export default function App() {

  return (
    // Tailwind CSS
    <main className="text-gray-500 bg-blue-200 body-font"> 
      {/* Components added then created in Components folder  */}
    
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

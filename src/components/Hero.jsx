import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[85vh] text-center fade-in-up visible"
    >
      {/* Badge */}
      <div className="bg-white brutal-border brutal-shadow px-5 py-1.5 mb-8 inline-block">
        <span className="font-bold text-sm tracking-wide">• HI, I'M NISHIT PATEL</span>
      </div>

      {/* Main headline */}
      <h1 className="font-black font-heading leading-[0.9] mb-8">
        <span className="block text-7xl sm:text-8xl md:text-[10rem] text-black">
          NISHIT
        </span>
        <span className="block text-7xl sm:text-8xl md:text-[10rem] text-[#0055ff]">
          PATEL
        </span>
      </h1>

      {/* Subtitle — directly on grid, no background box */}
      <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-12 px-4">
        Building at the intersection of applied machine learning, scalable backend systems, and AI-driven products.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-5">
        <a
          href="#projects"
          className="brutal-border brutal-shadow-hover bg-black text-white px-8 py-4 font-bold text-lg transition-all"
        >
          VIEW PROJECTS →
        </a>
        <a
          href="https://github.com/nish-debug15"
          target="_blank"
          rel="noreferrer"
          className="brutal-border brutal-shadow-hover bg-white px-8 py-4 font-bold text-lg transition-all"
        >
          GITHUB
        </a>
      </div>
    </section>
  );
};

export default Hero;

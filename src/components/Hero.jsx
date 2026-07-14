import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[85vh] text-center fade-in-up visible"
    >
      {/* Badge pill */}
      <div className="bg-white brutal-border brutal-shadow px-5 py-1.5 mb-8 inline-block">
        <span className="font-bold text-sm tracking-wide">ML / BACKEND ENGINEER</span>
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
        Architecting scalable backend systems and building applied machine learning products.
      </p>

      {/* Single CTA */}
      <a
        href="#projects"
        className="brutal-border brutal-shadow-hover bg-black text-white px-8 py-4 font-bold text-lg transition-all"
      >
        VIEW PROJECTS &rarr;
      </a>
    </section>
  );
};

export default Hero;

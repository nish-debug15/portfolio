import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 fade-in-up visible">
      <h2 className="text-5xl md:text-7xl font-black mb-10 font-heading">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image — brutalist frame */}
        <div className="shrink-0 mx-auto md:mx-0">
          <div className="bg-white brutal-border brutal-shadow brutal-shadow-hover p-3 rotate-[-2deg]">
            <img
              src="/pic.jpeg"
              alt="Nishit Patel"
              className="w-64 h-72 object-cover border-2 border-black"
            />
          </div>
        </div>

        {/* Text — scannable format, capped line width */}
        <div className="max-w-prose space-y-5 text-lg md:text-xl font-medium leading-relaxed">
          <p>
            CS undergrad specializing in Data Science — focused on building ML
            systems that actually ship.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#e53e3e] mt-1.5 text-xs">&#9632;</span>
              <span>
                Currently an ML Intern at Flyrank AI, engineering
                production-grade AI solutions at scale.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#e53e3e] mt-1.5 text-xs">&#9632;</span>
              <span>
                Hands-on with end-to-end ML pipelines — from data wrangling and
                model training to deployment and monitoring.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#e53e3e] mt-1.5 text-xs">&#9632;</span>
              <span>
                Driven to solve hard infrastructure problems where applied
                research meets rigorous engineering at scale.
              </span>
            </li>
          </ul>

          {/* Resume CTA */}
          <div className="pt-2">
            <a
              href="https://drive.google.com/file/d/1_FsPiRYvZZ-jTLVK2BBH6SCypxto9FTt/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="brutal-border brutal-shadow brutal-shadow-hover bg-white px-8 py-4 font-bold text-lg inline-block transition-all"
            >
              GRAB MY RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

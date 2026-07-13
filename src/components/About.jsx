import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 fade-in-up visible">
      <h2 className="text-5xl md:text-7xl font-black mb-10 font-heading">
        About Me
      </h2>

      {/* Text directly on the grid background — no white box */}
      <div className="max-w-3xl space-y-6 text-lg md:text-xl font-medium leading-relaxed">
        <p>
          I'm a Computer Science undergraduate at RV University focusing on Data Science and scalable systems.
          I build end-to-end ML pipelines, NLP systems, and robust backend infrastructure.
        </p>
        <p>
          Beyond the resume, I'm passionate about engineering real-world solutions that can handle scale
          and complexity, keeping my sights set on pushing technical boundaries at leading engineering
          organizations like Google.
        </p>
        <p>
          Whether it's fine-tuning deep learning models or architecting full-stack applications with
          FastAPI and PostgreSQL, building is just how I think.
        </p>
      </div>

      {/* Resume CTA */}
      <div className="mt-10">
        <a
          href="https://drive.google.com/file/d/1_FsPiRYvZZ-jTLVK2BBH6SCypxto9FTt/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="brutal-border brutal-shadow brutal-shadow-hover bg-white px-8 py-4 font-bold text-lg inline-block transition-all"
        >
          📄 GRAB MY RESUME
        </a>
      </div>
    </section>
  );
};

export default About;

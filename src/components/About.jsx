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
          I am a Computer Science undergraduate specializing in Data Science and machine learning
          infrastructure. My focus is on architecting scalable backend systems and end-to-end ML
          pipelines that solve complex, data-heavy problems.
        </p>
        <p>
          Currently working as a Machine Learning Intern at Flyrank AI, I am passionate about
          engineering real-world solutions that handle scale and complexity. My trajectory is firmly
          geared toward pushing technical boundaries and building high-impact products at leading
          technology firms like Google.
        </p>
        <p>
          Whether it is fine-tuning deep learning models or deploying robust full-stack applications,
          I thrive at the intersection of applied research and rigorous software engineering.
        </p>
      </div>

      {/* Resume CTA — no emoji */}
      <div className="mt-10">
        <a
          href="https://drive.google.com/file/d/1_FsPiRYvZZ-jTLVK2BBH6SCypxto9FTt/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="brutal-border brutal-shadow brutal-shadow-hover bg-white px-8 py-4 font-bold text-lg inline-block transition-all"
        >
          GRAB MY RESUME
        </a>
      </div>
    </section>
  );
};

export default About;

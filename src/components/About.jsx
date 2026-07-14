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

        {/* Text — paragraph form, capped line width */}
        <div className="max-w-prose space-y-6 text-lg md:text-xl font-medium leading-relaxed">
          <p>
            I am a Computer Science undergraduate specializing in Data Science and machine learning
            infrastructure. My focus is on architecting scalable backend systems and end-to-end ML
            pipelines that solve complex, data-heavy problems.
          </p>
          <p>
            Currently working as a Machine Learning Intern at Flyrank AI, I am passionate about
            engineering real-world solutions that handle scale and complexity. My trajectory is
            geared toward solving hard, ambiguous problems at the intersection of infrastructure
            and intelligence — the kind that demand both deep technical craft and systems thinking.
          </p>
          <p>
            Whether it is fine-tuning deep learning models or deploying robust full-stack applications,
            I thrive at the intersection of applied research and rigorous software engineering.
          </p>

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

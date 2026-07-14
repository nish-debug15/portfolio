import React from 'react';

const experiences = [
  {
    role: 'Machine Learning Intern @ Flyrank AI',
    date: 'July 2026 - Present',
    description: [
      'Working on cutting-edge AI solutions and scalable infrastructure.',
      'Details coming soon. Currently building.',
    ],
    dotColor: '#0055ff',
  },
  {
    role: 'Data Associate Intern @ Infotact Solutions',
    date: 'Feb 2026 - Apr 2026',
    description: [
      'Developed end-to-end ML pipelines for structured data classification.',
      'Conducted extensive data quality audits for production datasets.',
    ],
    dotColor: '#e53e3e',
  },
  {
    role: 'AI/ML Intern @ Klarvia',
    date: 'Oct 2025 - Jan 2026',
    description: [
      'Designed THOR, a multi-task NLP pipeline using Hugging Face transformers.',
      'Built context-aware memory retrieval for multi-turn conversational AI.',
    ],
    dotColor: '#e53e3e',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 fade-in-up visible">
      <h2 className="text-5xl md:text-7xl font-black mb-12 font-heading">
        Experience
      </h2>

      <div className="timeline-line space-y-10 pl-14 max-w-4xl">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <div
              className="timeline-dot"
              style={{ backgroundColor: exp.dotColor }}
            />

            {/* Card */}
            <div className="bg-white brutal-border brutal-shadow brutal-shadow-hover p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold font-heading">
                  {exp.role}
                </h3>
                <span className="font-bold bg-gray-100 px-3 py-1 brutal-border text-sm inline-block w-fit shrink-0">
                  {exp.date}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((line, i) => (
                  <li key={i} className="text-base md:text-lg font-medium flex items-start gap-2">
                    <span className="text-[#e53e3e] mt-1.5 text-xs">&#9632;</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

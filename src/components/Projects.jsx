import React from 'react';

const projects = [
  {
    title: 'DevPulse',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    desc: 'AI-powered engineering standup & bottleneck tracker with automated GitHub syncing.',
    link: 'https://github.com/nish-debug15',
  },
  {
    title: 'Telecom Customer Churn',
    tech: ['XGBoost', 'Scikit-learn', 'SHAP'],
    desc: 'End-to-end predictive pipeline achieving 95.8% recall with a Streamlit dashboard.',
    link: 'https://github.com/nish-debug15',
  },
  {
    title: 'Brain Tumor Detection',
    tech: ['TensorFlow', 'ResNet50', 'OpenCV'],
    desc: 'Transfer learning model for MRI classification featuring Grad-CAM explainability.',
    link: 'https://github.com/nish-debug15',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 fade-in-up visible">
      <h2 className="text-5xl md:text-7xl font-black mb-12 font-heading">
        &lt;/&gt; Things I've Built
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white brutal-border brutal-shadow brutal-shadow-hover flex flex-col h-full transition-all"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold font-heading mb-4">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-medium text-gray-800 leading-relaxed">
                {project.desc}
              </p>
            </div>
            <div className="p-4 border-t-2 border-black bg-gray-50 flex justify-between items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#e53e3e] hover:underline underline-offset-4 decoration-2"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

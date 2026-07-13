import React from 'react';

const projects = [
  {
    title: 'DevPulse',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    desc: 'AI-powered engineering standup & bottleneck tracker with automated GitHub syncing.',
    link: 'https://github.com/nish-debug15',
  },
  {
    title: 'UrbanLens',
    tech: ['React', 'Python', 'ML'],
    desc: 'Co-developed UrbanLens, an urban analytics platform for data-driven city planning and visualization.',
    link: 'https://github.com/Pranav591/Urbanlens2',
  },
  {
    title: 'User Journey Funnel Analysis',
    tech: ['Python', 'Pandas', 'Analytics'],
    desc: 'End-to-end product analytics pipeline processing event-level data to diagnose funnel leakage and predict conversions.',
    link: 'https://github.com/nish-debug15/User-Journey-Funnel-Analysis',
  },
  {
    title: 'Telecom Customer Churn',
    tech: ['XGBoost', 'Scikit-learn', 'SHAP'],
    desc: 'End-to-end predictive pipeline achieving 95.8% recall with a Streamlit dashboard.',
    link: 'https://github.com/nish-debug15',
  },
  {
    title: 'BO Cointegration Trading',
    tech: ['Python', 'Statistics', 'Trading'],
    desc: 'Algorithmic trading implementation focusing on cointegration strategies for statistical arbitrage.',
    link: 'https://github.com/nish-debug15/bo-cointegration-trading',
  },
  {
    title: 'Brain Tumor Detection',
    tech: ['TensorFlow', 'ResNet50', 'OpenCV'],
    desc: 'Transfer learning model for MRI classification featuring Grad-CAM explainability.',
    link: 'https://github.com/nish-debug15',
  },
  {
    title: 'EdgeWise',
    tech: ['Python', 'ML', 'Edge Computing'],
    desc: 'Lightweight edge-optimized inference framework for deploying ML models on resource-constrained devices.',
    link: 'https://github.com/nish-debug15/EdgeWise',
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
                View Code &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

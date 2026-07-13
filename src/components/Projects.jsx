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
            <div className="p-4 border-t-2 border-black bg-gray-50">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold hover:text-[#e53e3e] transition-colors"
              >
                <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

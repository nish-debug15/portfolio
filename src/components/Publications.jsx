import React from 'react';

const publications = [
  {
    title: 'Why Your JWT Cookie Dies Between Vercel and EC2 (And How I Fixed It)',
    organization: 'AWS Builder Center',
    date: 'July 2026',
    description: [
      'Published my first technical article on AWS Builder Center documenting the authentication issues encountered while deploying DevPulse across Vercel and Amazon EC2.',
      'Covers why session cookies worked locally but failed in production, how cross-origin authentication behaved differently after deployment, and the debugging process that led to the working architecture.',
      'Written as part of my journey leading the AWS Student Builder Group at RV University.',
    ],
    link: 'https://builder.aws.com/content/3GP4O5y4CvVN4AnnFMceMy9ZdRU/why-your-jwt-cookie-dies-between-vercel-and-ec2-and-how-i-fixed-it',
    buttonLabel: 'Read Article',
    dotColor: '#0055ff',
  },
  {
    title: 'Predictive Modeling of Search Engine Visibility Decay: A Machine Learning Approach for Proactive SEO',
    organization: 'FlyRank ML Internship',
    date: 'August 2026',
    description: [
      'Published a technical research report documenting my Machine Learning Capstone completed during the FlyRank ML Internship.',
      'Built a deterministic, leakage-free ML pipeline over 548,528 qualified instances derived from FlyRank\'s 93M+ row Search Intelligence warehouse.',
      'Final Random Forest achieved a Macro F1 score of 0.4871 on the held-out test set. Applied SHAP for interpretability and built a recommendation engine mapping predictions into actionable SEO recommendations.',
    ],
    link: 'https://nish-debug15.github.io/search-health-prediction/',
    buttonLabel: 'Read Report',
    dotColor: '#e53e3e',
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 fade-in-up visible">
      <h2 className="text-5xl md:text-7xl font-black mb-12 font-heading">
        Publications
      </h2>

      <div className="timeline-line space-y-10 pl-14 max-w-4xl">
        {publications.map((pub, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <div
              className="timeline-dot"
              style={{ backgroundColor: pub.dotColor }}
            />

            {/* Card */}
            <div className="bg-white brutal-border brutal-shadow brutal-shadow-hover p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold font-heading">
                  {pub.title}
                </h3>
                <span className="font-bold bg-gray-100 px-3 py-1 brutal-border text-sm inline-block w-fit shrink-0">
                  {pub.date}
                </span>
              </div>
              <p className="text-sm font-bold text-gray-600 mb-3">
                {pub.organization}
              </p>
              <ul className="space-y-2 mb-5">
                {pub.description.map((line, i) => (
                  <li key={i} className="text-base md:text-lg font-medium flex items-start gap-2">
                    <span className="text-[#e53e3e] mt-1.5 text-xs">&#9632;</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 brutal-border brutal-shadow-hover bg-black text-white px-5 py-2.5 font-bold text-sm transition-all"
              >
                {pub.buttonLabel} &#8599;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;

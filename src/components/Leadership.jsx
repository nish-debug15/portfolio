import React from 'react';

const leadership = [
  {
    title: 'AWS Student Builder Group Leader',
    subtitle: 'May 2026 - Present',
    description:
      'Leading the AWS Student Builder community, organizing cloud workshops, and fostering hands-on learning.',
    colorClass: 'achievement-card-yellow',
  },
  {
    title: 'Agentblazer Core Tech Team Member',
    subtitle: 'April 2026 - Present',
    description:
      'Contributing to the core technical team driving AI agent development and tooling.',
    colorClass: 'achievement-card-pink',
  },
  {
    title: '50+ RSVPs | Under25 x Zerodha, Zero1 Fest',
    subtitle: '',
    description:
      'Selected among top attendees for premier startup and tech community events.',
    colorClass: 'achievement-card-blue',
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-16 fade-in-up visible">
      <h2 className="text-5xl md:text-7xl font-black mb-12 font-heading">
        Leadership
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {leadership.map((item, idx) => (
          <div
            key={idx}
            className={`${item.colorClass} brutal-border brutal-shadow brutal-shadow-hover p-6 flex flex-col transition-all`}
          >
            <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
            {item.subtitle && (
              <span className="text-sm font-bold text-gray-600 mb-3 inline-block">
                {item.subtitle}
              </span>
            )}
            <p className="text-base font-medium leading-relaxed flex-grow">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;

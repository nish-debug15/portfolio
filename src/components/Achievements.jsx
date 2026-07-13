import React from 'react';

const achievements = [
  {
    title: 'AWS Student Builder Group Leader',
    subtitle: 'May 2026 - Present',
    description:
      'Leading the AWS Student Builder community, organizing cloud workshops, and fostering hands-on learning experiences for fellow students.',
    colorClass: 'achievement-card-yellow',
    emoji: '☁️',
  },
  {
    title: 'Agentblazer Core Tech Team Member',
    subtitle: 'April 2026 - Present',
    description:
      'Contributing to the core technical team driving AI agent development, tooling, and community initiatives.',
    colorClass: 'achievement-card-pink',
    emoji: '🤖',
  },
  {
    title: 'RSVP 50+ | Under25 x Zerodha, Zero1 Fest',
    subtitle: '',
    description:
      'Selected among top attendees for premier startup and tech community events, networking with founders and builders across the ecosystem.',
    colorClass: 'achievement-card-blue',
    emoji: '🎯',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 fade-in-up visible">
      <h2 className="text-5xl md:text-7xl font-black mb-12 font-heading">
        Achievements & Community
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className={`${item.colorClass} brutal-border brutal-shadow brutal-shadow-hover p-6 flex flex-col transition-all`}
          >
            <div className="text-4xl mb-4">{item.emoji}</div>
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

export default Achievements;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Octanet Technologies',
    period: 'Aug 2024 – Sep 2024',
    location: 'Remote',
    color: 'from-indigo-500 to-purple-600',
    glow: 'shadow-indigo-500/30',
    border: 'border-indigo-500/30',
    dot: 'bg-indigo-500',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    points: [
      'Worked on React, Node.js, Express and MongoDB to build full stack features.',
      'Built responsive frontend interfaces and backend REST APIs.',
      'Learned full stack application architecture and deployment workflows.',
    ],
  },
  {
    role: 'Python Development Intern',
    company: 'InternPE Institute',
    period: 'Jun 2023 – Jul 2023',
    location: 'Remote',
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/30',
    border: 'border-cyan-500/30',
    dot: 'bg-cyan-500',
    tech: ['Python', 'Git', 'Automation', 'Debugging'],
    points: [
      'Developed Python applications focused on scripting and automation.',
      'Worked on debugging software and improving existing codebase quality.',
      'Used Git for version control and collaborative development.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">My professional journey so far</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2, ease: 'easeOut' }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 transform md:-translate-x-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${exp.dot} ring-4 ring-gray-950 shadow-lg`} />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-10 md:ml-0">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`glass rounded-2xl p-6 border ${exp.border} shadow-xl ${exp.glow} transition-all duration-300`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FiBriefcase size={13} className="text-gray-500" />
                          <span className="text-white font-semibold text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <FiCalendar size={11} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FiMapPin size={11} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2 mb-4">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-gray-400 text-sm">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.color}`} />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-0.5 text-xs rounded-full font-medium bg-gradient-to-r ${exp.color} text-white opacity-90`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

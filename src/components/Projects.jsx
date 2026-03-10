import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    title: 'AI Powered Mock Interview System',
    description:
      'An AI-based platform that simulates real-world interviews, analyzes speech tone and communication patterns, and provides feedback to improve confidence and interview skills.',
    tech: ['Next.js', 'Java', 'PostgreSQL'],
    color: 'from-indigo-500 to-purple-600',
    glow: 'shadow-indigo-500/20',
    border: 'border-indigo-500/20',
    badge: 'AI / ML',
    github: 'https://github.com/',
    demo: '#',
    highlights: ['Speech tone analysis', 'Real-time feedback', 'AI interview simulation'],
  },
  {
    title: 'NotedAF – Academic Forum',
    description:
      'A MERN stack academic collaboration platform where teachers and students can create and manage posts, classrooms, and academic discussions with advanced features.',
    tech: ['React', 'JavaScript', 'MongoDB'],
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/20',
    badge: 'Full Stack',
    github: 'https://github.com/',
    demo: '#',
    highlights: ['OTP authentication', 'AI note summarization', 'Classroom management'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Things I've built that I'm proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -8 }}
              className={`glass rounded-2xl border ${proj.border} shadow-2xl ${proj.glow} overflow-hidden group transition-all duration-300 flex flex-col`}
            >
              {/* Card top gradient banner */}
              <div className={`h-2 bg-gradient-to-r ${proj.color}`} />

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${proj.color} flex items-center justify-center shadow-lg`}>
                      <FiCode className="text-white" size={18} />
                    </div>
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${proj.color} text-white`}>
                        {proj.badge}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={15} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={proj.demo}
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={15} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{proj.description}</p>

                {/* Feature highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.highlights.map((h) => (
                    <span key={h} className="text-xs text-gray-400 flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${proj.color} inline-block`} />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full glass border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certifications = [
  {
    title: 'NPTEL Cloud Computing',
    issuer: 'NPTEL – IIT',
    color: 'from-indigo-500 to-purple-600',
    glow: 'shadow-indigo-500/20',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/10',
    icon: '☁️',
  },
  {
    title: 'NPTEL Operating System Fundamentals',
    issuer: 'NPTEL – IIT',
    color: 'from-blue-500 to-cyan-600',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/10',
    icon: '💻',
  },
  {
    title: 'Foundation of Cyber Security',
    issuer: 'Google / Coursera',
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/10',
    icon: '🔒',
  },
  {
    title: 'Blockchain for Enterprises',
    issuer: 'Linux Foundation',
    color: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/10',
    icon: '⛓️',
  },
  {
    title: 'Automated Testing with Selenium',
    issuer: 'Coursera',
    color: 'from-pink-500 to-rose-600',
    glow: 'shadow-pink-500/20',
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/10',
    icon: '🧪',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading">Credentials and professional development</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative overflow-hidden glass rounded-2xl p-6 border ${cert.border} shadow-xl ${cert.glow} transition-all duration-300 group cursor-default`}
            >
              {/* Icon + award badge */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${cert.bg ?? 'bg-white/5'} flex items-center justify-center text-2xl border ${cert.border}`}>
                  {cert.icon}
                </div>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-md opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                  <FiAward size={14} className="text-white" />
                </div>
              </div>

              {/* Title only — clean, no issuer divider */}
              <h3 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${cert.color} text-sm leading-snug`}>
                {cert.title}
              </h3>

              {/* Bottom glow line on hover — not a divider */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

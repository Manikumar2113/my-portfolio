import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="research" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Research</h2>
          <p className="section-subheading">Academic contributions and research work</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="glass rounded-2xl p-8 border border-emerald-500/20 shadow-2xl shadow-emerald-500/10 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-500/30">
                <FiBookOpen size={28} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Tag */}
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                Research Paper
              </span>

              <h3 className="text-xl font-bold text-white leading-relaxed mb-4">
                Detecting and Mitigating Black Hole Attacks in MANETs using Advanced Deep Learning Techniques
              </h3>

              {/* Venue */}
              <div className="flex items-start gap-3 glass rounded-xl p-4 border border-white/5">
                <FiAward size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">National Student Research Symposium</p>
                  <p className="text-gray-400 text-sm mt-0.5">Kristu Jayanti University</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                This research focused on developing deep learning models to identify and counter Black Hole Attacks in 
                Mobile Ad-hoc Networks (MANETs), improving network security and reliability in dynamic distributed environments.
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['MANETs', 'Deep Learning', 'Network Security', 'Black Hole Attacks', 'Cybersecurity'].map((kw) => (
                  <span key={kw} className="px-2.5 py-0.5 text-xs font-medium rounded-full glass border border-emerald-500/20 text-emerald-400">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

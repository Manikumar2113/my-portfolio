import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiCalendar, FiAward, FiBookOpen, FiFileText, FiStar } from 'react-icons/fi';

const educationData = [
  {
    degree: 'Master of Computer Application',
    institution: 'Kristu Jayanti College, Autonomous',
    location: 'Bengaluru',
    year: 'Present',
    percentage: '72.92%',
    Icon: FiAward,
    color: 'from-indigo-500 to-purple-600',
    shadow: 'shadow-indigo-500/20',
    border: 'border-indigo-500/30',
    current: true,
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Kristu Jayanti College, Autonomous',
    location: 'Bengaluru',
    year: '2024',
    percentage: '66.05%',
    Icon: FiBookOpen,
    color: 'from-purple-500 to-cyan-600',
    shadow: 'shadow-purple-500/20',
    border: 'border-purple-500/30',
    current: false,
  },
  {
    degree: 'Pre – University',
    institution: 'New Horizon PU College',
    location: '',
    year: '2021',
    percentage: '63%',
    Icon: FiFileText,
    color: 'from-cyan-500 to-teal-600',
    shadow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/30',
    current: false,
  },
  {
    degree: '10th Grade',
    institution: 'Mother Theresa Memorial School',
    location: '',
    year: '2019',
    percentage: '70.24%',
    Icon: FiStar,
    color: 'from-teal-500 to-emerald-600',
    shadow: 'shadow-teal-500/20',
    border: 'border-teal-500/30',
    current: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">My academic journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} hidden sm:flex items-center justify-center shadow-lg ${edu.shadow} z-10`}>
                  <edu.Icon size={20} className="text-white" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.15 }}
                  className={`glass rounded-2xl p-6 border ${edu.border} hover:shadow-lg ${edu.shadow} transition-all duration-150`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      {/* Degree */}
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`sm:hidden w-7 h-7 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shrink-0`}>
                          <edu.Icon size={14} className="text-white" />
                        </span>
                        <h3 className={`text-lg font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                            Ongoing
                          </span>
                        )}
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-1.5 text-gray-300 font-medium text-sm mb-1">
                        <FiBook size={13} className="text-gray-500 shrink-0" />
                        <span>{edu.institution}{edu.location ? `, ${edu.location}` : ''}</span>
                      </div>

                    </div>

                    {/* Right side — year + percentage */}
                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <FiCalendar size={13} className="text-gray-500" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiAward size={13} className="text-gray-500" />
                        <span className={`font-bold text-sm bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

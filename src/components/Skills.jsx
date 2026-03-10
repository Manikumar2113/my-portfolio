import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGithub,
} from 'react-icons/fa';
import {
  SiMysql, SiMongodb, SiVscodium, SiJupyter, SiEclipseide,
} from 'react-icons/si';
import { TbBrain, TbBrandPython } from 'react-icons/tb';

const skillCategories = [
  {
    title: 'Programming',
    emoji: '⌨️',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    glow: 'hover:shadow-indigo-500/30',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/10',
    skills: [
      { name: 'Java', icon: <FaJava size={22} />, color: 'text-orange-400' },
      { name: 'Python', icon: <FaPython size={22} />, color: 'text-yellow-400' },
    ],
  },
  {
    title: 'Web Development',
    emoji: '🌐',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    glow: 'hover:shadow-cyan-500/30',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/10',
    skills: [
      { name: 'HTML', icon: <FaHtml5 size={22} />, color: 'text-orange-500' },
      { name: 'CSS', icon: <FaCss3Alt size={22} />, color: 'text-blue-400' },
      { name: 'React', icon: <FaReact size={22} />, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Databases',
    emoji: '🗄️',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    glow: 'hover:shadow-emerald-500/30',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/10',
    skills: [
      { name: 'MySQL', icon: <SiMysql size={22} />, color: 'text-blue-400' },
      { name: 'MongoDB', icon: <SiMongodb size={22} />, color: 'text-emerald-400' },
    ],
  },
  {
    title: 'Tools & IDEs',
    emoji: '🛠️',
    color: 'from-orange-500 to-amber-600',
    textColor: 'text-orange-400',
    glow: 'hover:shadow-orange-500/30',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/10',
    skills: [
      { name: 'GitHub', icon: <FaGithub size={22} />, color: 'text-gray-300' },
      { name: 'VS Code', icon: <SiVscodium size={22} />, color: 'text-blue-400' },
      { name: 'Eclipse', icon: <SiEclipseide size={22} />, color: 'text-purple-400' },
      { name: 'Jupyter', icon: <SiJupyter size={22} />, color: 'text-orange-400' },
    ],
  },
  {
    title: 'Machine Learning',
    emoji: '🤖',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    glow: 'hover:shadow-pink-500/30',
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/10',
    skills: [
      { name: 'Supervised Learning', icon: <TbBrain size={22} />, color: 'text-pink-400' },
      { name: 'Unsupervised Learning', icon: <TbBrain size={22} />, color: 'text-rose-400' },
    ],
  },
];

function SkillBadge({ skill, catColor, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: 'backOut' }}
      whileHover={{
        scale: 1.12,
        y: -4,
        transition: { duration: 0.18 },
      }}
      className="group flex flex-col items-center gap-2 cursor-default"
    >
      {/* Icon bubble */}
      <div
        className={`relative w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center
          shadow-lg group-hover:shadow-xl transition-all duration-300
          group-hover:border-white/25 group-hover:bg-white/10`}
      >
        {/* Glow on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${catColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
        <span className={`relative z-10 ${skill.color} transition-transform duration-300`}>
          {skill.icon}
        </span>
      </div>
      {/* Label */}
      <span className="text-gray-400 text-xs font-medium text-center leading-tight group-hover:text-gray-200 transition-colors duration-200 max-w-[70px]">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading">The tools and technologies I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass rounded-2xl p-6 border ${cat.border} shadow-xl ${cat.glow}
                hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center text-xl border ${cat.border}`}>
                  {cat.emoji}
                </div>
                <div>
                  <h3 className={`font-bold text-sm bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-0.5">{cat.skills.length} skills</p>
                </div>
              </div>

              {/* Skill icon badges grid */}
              <div className="flex flex-wrap gap-4 justify-start">
                {cat.skills.map((skill, j) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    catColor={cat.color}
                    delay={0.3 + i * 0.1 + j * 0.07}
                    inView={inView}
                  />
                ))}
              </div>

              {/* Bottom glow line */}
              <div className={`mt-5 h-px bg-gradient-to-r ${cat.color} opacity-20 group-hover:opacity-50 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

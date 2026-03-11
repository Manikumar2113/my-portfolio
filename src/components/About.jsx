import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { value: '2+', label: 'Internships' },
  { value: '2+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '1', label: 'Research Paper' },
];



function ProfilePhoto({ inView }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 340, height: 380 }}>

      {/* ── Outermost slow-spin gradient ring ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #10b981, #6366f1)',
          borderRadius: '50%',
          width: 300,
          height: 300,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: 3,
        }}
      >
        <div className="w-full h-full rounded-full bg-gray-950" />
      </motion.div>

      {/* ── Middle counter-spin dashed ring ── */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute"
        style={{
          width: 326,
          height: 326,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          border: '1.5px dashed rgba(139,92,246,0.35)',
        }}
      />

      {/* ── Glow blobs ── */}
      <div className="absolute" style={{ width: 260, height: 260, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-indigo-600/30 blur-2xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute inset-4 rounded-full bg-purple-600/25 blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute inset-8 rounded-full bg-cyan-500/20 blur-xl"
        />
      </div>



      {/* ── Photo frame with gradient border ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.3 }}
        className="relative z-10"
        style={{ width: 240, height: 280 }}
      >
        {/* Gradient border wrapper */}
        <div
          className="w-full h-full rounded-3xl p-[3px] shadow-2xl shadow-indigo-500/40"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4, #10b981, #6366f1)',
            backgroundSize: '300% 300%',
            animation: 'gradient-border 4s ease infinite',
          }}
        >
          <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-900 relative">
            {/* Photo */}
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Mani R"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top"
                style={{ filter: 'brightness(1.05) contrast(1.05)' }}
              />
            ) : (
              /* Fallback initials if photo not yet added */
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600">
                <span className="text-6xl font-black text-white tracking-tight">MR</span>
                <span className="text-white/60 text-xs mt-2 font-medium">Add profile.jpg</span>
              </div>
            )}
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 rounded-[22px] shadow-inner" style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3)' }} />
            {/* Bottom name tag */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
              <p className="text-white font-bold text-sm">Mani R</p>
              <p className="text-indigo-300 text-xs font-medium">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Corner glow accents */}
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-500 blur-sm opacity-80" />
        <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-cyan-500 blur-sm opacity-80" />
      </motion.div>

      {/* ── Status badge ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-4 right-0 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/40 shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 animate-pulse" />
        <span className="text-emerald-400 text-xs font-semibold">Open to Work</span>
      </motion.div>

      {/* ── Experience chip ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute top-6 left-0 z-20 px-3 py-1.5 rounded-full glass border border-indigo-500/40 shadow-lg"
      >
        <span className="text-indigo-300 text-xs font-semibold">MCA Graduate 🎓</span>
      </motion.div>

    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 px-4">
      {/* add gradient-border keyframe */}
      <style>{`
        @keyframes gradient-border {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading">Get to know me a little better</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo side */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <ProfilePhoto inView={inView} />
            </motion.div>

            {/* Text content */}
            <motion.div variants={stagger} className="space-y-6">
              <motion.h3 variants={fadeUp} className="text-3xl font-bold text-white">
                Driven by{' '}
                <span className="gradient-text">Code & Data</span>
              </motion.h3>

              <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed text-lg">
                I am an MCA graduate passionate about software development and problem solving. 
                I am interested in roles such as <span className="text-indigo-400 font-medium">Software Engineer</span>, <span className="text-purple-400 font-medium">Data Scientist</span>, <span className="text-cyan-400 font-medium">Data Analyst</span>, and other IT-related positions.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
                I enjoy building applications, analyzing data, and continuously learning new technologies. 
                I am open to opportunities across different domains in the IT industry.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="glass rounded-xl p-4 text-center border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
                    <div className="text-2xl font-extrabold gradient-text">{value}</div>
                    <div className="text-gray-500 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-3 pt-2">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Get In Touch
                </button>
                <a
                  href="/MANI'S%20RESUME.pdf"
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      const res = await fetch("/MANI'S%20RESUME.pdf", { method: 'HEAD' });
                      if (res.ok) {
                        const a = document.createElement('a');
                        a.href = "/MANI'S%20RESUME.pdf";
                        a.download = 'Mani Resume.pdf';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                      } else {
                        alert('Resume not available yet. Please add resume.pdf to the public/ folder.');
                      }
                    } catch {
                      alert('Could not load resume. Please try again later.');
                    }
                  }}
                  className="btn-outline"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

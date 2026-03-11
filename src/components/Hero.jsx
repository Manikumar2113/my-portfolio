import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';

const roles = ['MCA Graduate', 'Aspiring Software Developer', 'Full Stack Development Enthusiast'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[currentRole];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRole((r) => (r + 1) % roles.length);
    }

    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = async (e) => {
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
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="px-4 py-1.5 rounded-full glass text-sm text-indigo-400 border border-indigo-500/30 font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Mani R</span>
        </motion.h1>

        {/* Typing Text */}
        <motion.div variants={itemVariants} className="h-12 mb-6 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-semibold text-gray-300">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-indigo-400 ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about building elegant web applications. I love crafting clean, 
          efficient code and turning ideas into impactful digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#projects')}
            className="btn-primary"
          >
            View Projects
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/MANI'S%20RESUME.pdf"
            onClick={handleResumeDownload}
            className="btn-outline"
          >
            Download Resume
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-3 rounded-full text-gray-300 font-semibold glass glass-hover"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-5 justify-center">
          {[
            { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/mani-r-043781278/', label: 'LinkedIn' },
            { icon: <FiGithub size={20} />, href: 'https://github.com/', label: 'GitHub' },
            { icon: <FiMail size={20} />, href: 'mailto:manikumar2113@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-indigo-400 transition-colors"
        aria-label="Scroll down"
      >
        <FiChevronDown size={28} />
      </motion.button>
    </section>
  );
}

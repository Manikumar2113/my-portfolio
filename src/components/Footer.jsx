import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const socials = [
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/mani-r-043781278/', label: 'LinkedIn' },
  { icon: <FiGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FiMail size={18} />, href: 'mailto:manikumar2113@gmail.com', label: 'Email' },
];

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Research', 'Certifications', 'Contact'];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 bg-gray-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <span className="text-white text-xs font-black leading-none">MR</span>
              </div>
              <div className="leading-none">
                <span className="text-base font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">MANI R</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">MCA Graduate · Aspiring Software Developer</p>
            <p className="text-gray-600 text-xs mt-1">Bengaluru, India</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-500 hover:text-indigo-400 transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center">
            © {new Date().getFullYear()} Mani R. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">Built with React · Tailwind CSS · Framer Motion</p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 btn-primary rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/30"
        aria-label="Back to top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FiArrowUp size={18} />
      </motion.button>
    </footer>
  );
}

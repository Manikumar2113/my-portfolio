import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FiMail, FiPhone, FiLinkedin, FiSend, FiMapPin,
  FiCheckCircle, FiAlertTriangle, FiUser, FiMessageSquare,
  FiBriefcase, FiGithub, FiArrowRight,
} from 'react-icons/fi';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const contactInfo = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: 'manikumar2113@gmail.com',
    href: 'mailto:manikumar2113@gmail.com',
    color: 'from-indigo-500 to-purple-600',
    glow: 'shadow-indigo-500/30',
  },
  {
    icon: <FiPhone size={18} />,
    label: 'Phone',
    value: '+91 7899308049',
    href: 'tel:+917899308049',
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/30',
  },
  {
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'mani-r-043781278',
    href: 'https://www.linkedin.com/in/mani-r-043781278/',
    color: 'from-blue-500 to-indigo-600',
    glow: 'shadow-blue-500/30',
  },
  {
    icon: <FiGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/manikumar',
    href: 'https://github.com/',
    color: 'from-gray-500 to-gray-700',
    glow: 'shadow-gray-500/30',
  },
  {
    icon: <FiMapPin size={18} />,
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/30',
  },
];

const subjectOptions = [
  { value: 'Job Opportunity', emoji: '💼' },
  { value: 'Freelance Project', emoji: '🚀' },
  { value: 'Collaboration', emoji: '🤝' },
  { value: 'Internship', emoji: '🎓' },
  { value: 'Just Saying Hi', emoji: '👋' },
];

const MAX_MSG = 500;

function FloatingLabel({ label, icon, active, filled }) {
  return (
    <motion.label
      animate={{ y: active || filled ? -22 : 0, scale: active || filled ? 0.8 : 1, color: active ? '#818cf8' : '#6b7280' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="absolute left-4 top-3.5 flex items-center gap-1.5 pointer-events-none origin-left text-sm font-medium"
      style={{ transformOrigin: 'left center' }}
    >
      {icon}
      {label}
    </motion.label>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focus, setFocus] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2)
      newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.subject)
      newErrors.subject = 'Please select a reason for contacting';
    if (!formData.message.trim() || formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:   WEB3FORMS_KEY,
          name:         formData.name,
          email:        formData.email,
          subject:      `[Portfolio] ${formData.subject} — from ${formData.name}`,
          message:      formData.message,
          replyto:      formData.email,
          from_name:    'Portfolio Contact Form',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setStatus('error');
    }
  };

  const inputBase =
    'w-full bg-white/5 border rounded-xl px-4 pt-6 pb-2.5 text-white text-sm focus:outline-none transition-all duration-300 placeholder-transparent';

  const inputClass = (field) =>
    `${inputBase} ${
      errors[field]
        ? 'border-red-500/70 focus:border-red-400'
        : focus[field]
        ? 'border-indigo-500 bg-indigo-950/20'
        : 'border-white/10 hover:border-white/20'
    }`;

  return (
    <section id="contact" className="relative py-24 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/15 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-indigo-300 text-xs font-semibold tracking-wider uppercase">Available for Work</span>
          </div>
          <h2 className="section-heading">Hire Me</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Have an opportunity or a project in mind? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: Info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let's Build Something Together</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                I'm actively looking for <span className="text-indigo-400 font-medium">full-time roles</span> and{' '}
                <span className="text-purple-400 font-medium">freelance projects</span> in software development and data science.
                Let's talk!
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={['LinkedIn', 'GitHub'].includes(item.label) ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/6 transition-all duration-300"
                    >
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ${item.glow} flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider">{item.label}</p>
                        <p className="text-white text-sm font-medium truncate group-hover:text-indigo-300 transition-colors">{item.value}</p>
                      </div>
                      <FiArrowRight size={14} className="text-gray-600 group-hover:text-indigo-400 ml-auto flex-shrink-0 transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/3 border border-white/8">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ${item.glow} flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider">{item.label}</p>
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <p className="text-emerald-400 text-xs font-semibold">Fast Response</p>
                <p className="text-gray-400 text-xs">Usually replies within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl border border-white/10 overflow-hidden">
              {/* Form header strip */}
              <div className="px-8 py-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-b border-white/8 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <p className="text-gray-400 text-xs font-mono ml-2">hire_me.form</p>
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      className="flex flex-col items-center justify-center text-center py-10 gap-5"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                        className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 flex items-center justify-center"
                      >
                        <FiCheckCircle size={38} className="text-emerald-400" />
                      </motion.div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">Message Sent! 🎉</h4>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
                          Thanks for reaching out! I've received your message and will reply to{' '}
                          <span className="text-indigo-300 font-medium">{formData.email || 'your email'}</span> within 24 hours.
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setStatus('idle')}
                        className="btn-outline mt-2 text-sm px-6"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Error banner */}
                      <AnimatePresence>
                        {status === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-start gap-3 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                          >
                            <FiAlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold">Couldn't send message</p>
                              <p className="text-red-400/80 text-xs mt-0.5">Please add your Web3Forms key to the .env file, or email directly at <a href="mailto:manikumar2113@gmail.com" className="underline">manikumar2113@gmail.com</a></p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <div className="relative">
                            <FloatingLabel
                              label="Your Name"
                              icon={<FiUser size={12} />}
                              active={focus.name}
                              filled={!!formData.name}
                            />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setFocus(f => ({ ...f, name: true }))}
                              onBlur={() => setFocus(f => ({ ...f, name: false }))}
                              placeholder="Your Name"
                              autoComplete="name"
                              className={inputClass('name')}
                            />
                          </div>
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                <FiAlertTriangle size={11} /> {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div>
                          <div className="relative">
                            <FloatingLabel
                              label="Email Address"
                              icon={<FiMail size={12} />}
                              active={focus.email}
                              filled={!!formData.email}
                            />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocus(f => ({ ...f, email: true }))}
                              onBlur={() => setFocus(f => ({ ...f, email: false }))}
                              placeholder="Email Address"
                              autoComplete="email"
                              className={inputClass('email')}
                            />
                          </div>
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                <FiAlertTriangle size={11} /> {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <FiBriefcase size={12} /> Reason for Contact
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {subjectOptions.map(opt => (
                            <motion.button
                              key={opt.value}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                setFormData(p => ({ ...p, subject: opt.value }));
                                if (errors.subject) setErrors(p => ({ ...p, subject: '' }));
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                                formData.subject === opt.value
                                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-indigo-500/50 hover:text-white'
                              }`}
                            >
                              {opt.emoji} {opt.value}
                            </motion.button>
                          ))}
                        </div>
                        <AnimatePresence>
                          {errors.subject && (
                            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                              className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                              <FiAlertTriangle size={11} /> {errors.subject}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Message */}
                      <div>
                        <div className="relative">
                          <FloatingLabel
                            label="Your Message"
                            icon={<FiMessageSquare size={12} />}
                            active={focus.message}
                            filled={!!formData.message}
                          />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocus(f => ({ ...f, message: true }))}
                            onBlur={() => setFocus(f => ({ ...f, message: false }))}
                            placeholder="Your Message"
                            rows={5}
                            maxLength={MAX_MSG}
                            className={`${inputClass('message')} resize-none`}
                          />
                          <span className={`absolute bottom-2.5 right-3 text-[11px] tabular-nums transition-colors ${
                            formData.message.length > MAX_MSG * 0.9 ? 'text-orange-400' : 'text-gray-600'
                          }`}>
                            {formData.message.length}/{MAX_MSG}
                          </span>
                        </div>
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                              className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                              <FiAlertTriangle size={11} /> {errors.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Submit */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={status === 'loading'}
                        className="relative w-full overflow-hidden rounded-xl px-6 py-3.5 font-semibold text-white text-sm flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                          boxShadow: '0 0 30px rgba(99,102,241,0.4)',
                        }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                        />
                        {status === 'loading' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending your message...
                          </>
                        ) : (
                          <>
                            <FiSend size={15} />
                            Send Message
                            <FiArrowRight size={15} />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-gray-600 text-xs">
                        By sending you agree to be contacted at{' '}
                        <span className="text-indigo-400">manikumar2113@gmail.com</span>
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

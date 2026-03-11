import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Fixed background elements */}
      <ParticleBackground />

      {/* Rich layered background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(139,92,246,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%), linear-gradient(160deg, #030712 0%, #0a0a1a 50%, #030712 100%)'
      }} />
      {/* Subtle dot-grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

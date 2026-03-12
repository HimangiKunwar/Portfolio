import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    try {
      // Create download link for your actual resume
      const link = document.createElement('a');
      link.href = '/Himangi_Kunwar_Resume.pdf';
      link.download = 'Himangi_Kunwar_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Also open in new tab for viewing
      window.open('/Himangi_Kunwar_Resume.pdf', '_blank');
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: just open in new tab
      window.open('/Himangi_Kunwar_Resume.pdf', '_blank');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Animated gradient orb */}
      <div className="gradient-orb top-1/4 left-1/3" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,135,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,135,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container-custom section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main name */}
          <motion.h1 
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.2em] mb-6 text-glow"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            HIMANGI
            <br />
            KUNWAR
          </motion.h1>
          
          {/* Role label */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="w-8 h-px bg-neon"></div>
            <span className="text-neon font-body text-sm md:text-base uppercase tracking-widest">
              FULL STACK DEVELOPER
            </span>
            <div className="w-8 h-px bg-neon"></div>
          </motion.div>
          
          {/* Bio */}
          <motion.p 
            className="text-muted max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Full Stack Developer with hands-on experience building scalable education platforms, 
            REST APIs, and AI-integrated backend systems. Passionate about clean code, 
            performance optimization, and end-to-end product delivery.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <button 
              onClick={scrollToProjects}
              className="group glass-card px-8 py-4 rounded-lg border border-neon/30 bg-neon/10 hover:bg-neon/20 transition-all duration-300 flex items-center gap-3 text-neon hover:shadow-neon cursor-hover"
            >
              <span className="font-medium">VIEW PROJECTS</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={downloadResume}
              className="group glass-card px-8 py-4 rounded-lg border border-white/20 hover:border-glow/50 transition-all duration-300 flex items-center gap-3 text-white hover:text-glow hover:shadow-glow cursor-hover"
            >
              <span className="font-medium">DOWNLOAD RESUME</span>
              <FiDownload className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
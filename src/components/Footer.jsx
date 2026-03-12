import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="relative bg-surface/50 border-t border-white/10">
        <div className="container-custom px-6 md:px-12 lg:px-24 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and copyright */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-neon mb-2 cursor-pointer cursor-hover" style={{ fontFamily: 'Syne, sans-serif' }} onClick={scrollToTop}>HK.</div>
              <p className="text-muted text-sm">
                © 2024 Himangi Kunwar. All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-10 h-10 bg-surface/50 border border-white/20 rounded-lg flex items-center justify-center text-white hover:text-neon hover:border-neon/50 transition-all duration-300 cursor-hover"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FiMail className="text-lg" />
              </motion.a>
              
              <motion.a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface/50 border border-white/20 rounded-lg flex items-center justify-center text-white hover:text-neon hover:border-neon/50 transition-all duration-300 cursor-hover"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FiGithub className="text-lg" />
              </motion.a>
              
              <motion.a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface/50 border border-white/20 rounded-lg flex items-center justify-center text-white hover:text-glow hover:border-glow/50 transition-all duration-300 cursor-hover"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FiLinkedin className="text-lg" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="back-to-top cursor-hover"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowUp className="text-lg" />
      </motion.button>
    </>
  );
};

export default Footer;
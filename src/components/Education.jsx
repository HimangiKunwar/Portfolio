import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="relative section-padding bg-surface/10">
      {/* Section number */}
      <div className="section-number" style={{ fontFamily: 'Syne, sans-serif' }}>06</div>
      
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4 text-glow" style={{ fontFamily: 'Syne, sans-serif' }}>
              EDUCATION
            </h2>
            <div className="w-24 h-px bg-neon mx-auto"></div>
          </motion.div>

          {/* Education card */}
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <div className="glass-card p-8 rounded-lg glow-border text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-neon mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                {portfolioData.education.degree}
              </h3>
              <p className="text-lg md:text-xl text-white mb-2">
                {portfolioData.education.institution}
              </p>
              <p className="text-muted">
                {portfolioData.education.location} • {portfolioData.education.duration}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative section-padding bg-surface/30">
      {/* Section number */}
      <div className="section-number" style={{ fontFamily: 'Syne, sans-serif' }}>02</div>
      
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4 text-glow" style={{ fontFamily: 'Syne, sans-serif' }}>
              TECHNICAL ARSENAL
            </h2>
            <div className="w-24 h-px bg-neon mx-auto"></div>
          </motion.div>

          {/* Skills grid */}
          <div className="space-y-16">
            {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                className="relative"
                variants={itemVariants}
              >
                {/* Category background label */}
                <div className="absolute -top-8 left-0 text-6xl md:text-8xl font-bold uppercase opacity-5 pointer-events-none select-none text-neon" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {category}
                </div>
                
                {/* Category title */}
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-8 text-neon relative z-10" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {category}
                </h3>
                
                {/* Skills pills */}
                <div className="flex flex-wrap gap-4 relative z-10">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-pill glass-card px-6 py-3 rounded-full border border-white/10 hover:border-neon/50 cursor-pointer cursor-hover"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(0, 255, 135, 0.3)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm md:text-base text-white">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-glow rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-10 w-1 h-1 bg-neon rounded-full animate-pulse"></div>
    </section>
  );
};

export default Skills;
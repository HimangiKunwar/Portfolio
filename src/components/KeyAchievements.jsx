import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiDatabase, FiCpu } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const KeyAchievements = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const achievementIcons = [FiAward, FiCpu, FiDatabase, FiTrendingUp];

  return (
    <section id="achievements" className="relative section-padding bg-surface/10">
      {/* Section number */}
      <div className="section-number" style={{ fontFamily: 'Syne, sans-serif' }}>05</div>
      
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
              KEY ACHIEVEMENTS
            </h2>
            <div className="w-24 h-px bg-neon mx-auto"></div>
          </motion.div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.achievements.map((achievement, index) => {
              const IconComponent = achievementIcons[index];
              return (
                <motion.div
                  key={index}
                  className="glass-card p-8 rounded-lg glow-border group hover:border-neon/30 transition-all duration-300 cursor-hover"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0, 255, 135, 0.15)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neon/10 border border-neon/30 rounded-lg flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                        <IconComponent className="text-neon text-xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-base md:text-lg leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-glow rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-10 w-1 h-1 bg-neon rounded-full animate-pulse"></div>
    </section>
  );
};

export default KeyAchievements;
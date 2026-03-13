import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative section-padding">
      {/* Section number */}
      <div className="section-number" style={{ fontFamily: 'Syne, sans-serif' }}>01</div>
      
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
              ABOUT ME
            </h2>
            <div className="w-24 h-px bg-neon mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio content */}
            <motion.div className="space-y-6 w-full" variants={itemVariants}>
              <div className="glass-card p-8 rounded-lg glow-border">
                <p className="text-muted text-lg leading-relaxed">
                  {portfolioData.about.bio}
                </p>
              </div>
              
              {/* Highlight box */}
              <div className="glass-card p-6 rounded-lg border-l-4 border-neon">
                <p className="text-neon font-medium">
                  "Code is like humor. When you have to explain it, it's bad." 
                  <span className="text-muted block mt-2">— Cory House</span>
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
              {portfolioData.about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-lg text-center glow-border group hover:border-neon/30 transition-all duration-300 cursor-hover"
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(0, 255, 135, 0.2)"
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-neon mb-2 group-hover:text-glow transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-muted text-sm md:text-base uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-radial from-glow/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-radial from-neon/5 to-transparent rounded-full blur-2xl"></div>
    </section>
  );
};

export default About;
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="relative section-padding">
      {/* Section number */}
      <div className="section-number" style={{ fontFamily: 'Syne, sans-serif' }}>03</div>
      
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
              PROFESSIONAL JOURNEY
            </h2>
            <div className="w-24 h-px bg-neon mx-auto"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full timeline-line hidden md:block"></div>
            
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 timeline-dot rounded-full hidden md:block"></div>
                
                {/* Experience card */}
                <div className={`glass-card p-8 rounded-lg glow-border ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  {/* Company and role */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-neon mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {exp.company}
                    </h3>
                    <h4 className="text-lg md:text-xl text-white mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-muted text-sm md:text-base">
                      {exp.duration} • {exp.location}
                    </p>
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-muted">
                        <div className="w-1 h-1 bg-neon rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-sm md:text-base leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-radial from-glow/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Experience;
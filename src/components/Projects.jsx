import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const gradientColors = [
    'from-neon/20 to-glow/20',
    'from-glow/20 to-purple-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-pink-500/20 to-neon/20',
  ];

  return (
    <section id="projects" className="relative section-padding bg-surface/20">
      {/* Section number */}
      <div className="section-number" style={{ fontFamily: 'Syne, sans-serif' }}>04</div>
      
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
              FEATURED PROJECTS
            </h2>
            <div className="w-24 h-px bg-neon mx-auto"></div>
          </motion.div>

          {/* Projects grid */}
          <div className="space-y-16">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
              >
                {/* Project card */}
                <div className="glass-card p-8 md:p-12 rounded-lg glow-border relative overflow-hidden">
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColors[index % gradientColors.length]}`}></div>
                  
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Project number */}
                    <div className="md:col-span-2">
                      <span className="text-6xl md:text-8xl font-bold text-neon/20" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Project content */}
                    <div className="md:col-span-10">
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-4xl font-bold text-neon mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                          {project.name}
                        </h3>
                        <p className="text-glow text-base md:text-lg mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                          {project.description}
                        </p>
                        
                        {/* Key Features */}
                        {project.keyFeatures && (
                          <div className="mb-4">
                            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                            <ul className="text-muted text-sm md:text-base space-y-1">
                              {project.keyFeatures.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <span className="text-neon mt-1">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Impact */}
                        {project.impact && (
                          <div className="mb-4">
                            <p className="text-neon font-medium text-sm md:text-base">
                              Impact: {project.impact}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {/* Tech stack */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 text-xs md:text-sm bg-neon/10 border border-neon/30 rounded-full text-neon hover:bg-neon/20 transition-colors cursor-hover"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project links */}
                      <div className="flex flex-wrap gap-3 items-center">

                        {/* Live Demo — only show if URL is real */}
                        {project.liveDemo && project.liveDemo !== '#' && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 bg-neon/10 border border-neon/30 rounded-full text-neon hover:bg-neon/20 transition-all duration-300 text-sm font-medium"
                          >
                            <FiExternalLink />
                            <span>LIVE DEMO</span>
                            <FiArrowRight />
                          </a>
                        )}

                        {/* Frontend Repo */}
                        {project.githubFrontend && (
                          <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-white hover:border-neon/50 hover:text-neon transition-all duration-300 text-sm font-medium"
                          >
                            <FiGithub />
                            <span>FRONTEND</span>
                          </a>
                        )}

                        {/* Backend Repo */}
                        {project.githubBackend && (
                          <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-white hover:border-neon/50 hover:text-neon transition-all duration-300 text-sm font-medium"
                          >
                            <FiGithub />
                            <span>BACKEND</span>
                          </a>
                        )}

                        {/* Single Repo (CBT System) */}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-white hover:border-neon/50 hover:text-neon transition-all duration-300 text-sm font-medium"
                          >
                            <FiGithub />
                            <span>SOURCE CODE</span>
                          </a>
                        )}

                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon/5 to-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Projects Button */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <a
              href="https://github.com/HimangiKunwar"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 glass-card border border-white/20 rounded-lg text-white hover:border-neon/50 hover:text-neon transition-all duration-300 cursor-hover"
            >
              <FiGithub className="text-xl" />
              <span className="font-medium">VIEW MORE PROJECTS ON GITHUB</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-neon rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-1 h-1 bg-glow rounded-full animate-pulse"></div>
    </section>
  );
};

export default Projects;
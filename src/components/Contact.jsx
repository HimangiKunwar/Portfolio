import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import confetti from 'canvas-confetti';
import { FiMail, FiGithub, FiLinkedin, FiArrowRight, FiLoader } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  // Handle success state
  useEffect(() => {
    if (state.succeeded) {
      // Fire confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00ff87', '#00d4ff', '#ffffff']
      });
      
      // Show success message
      setShowSuccess(true);
      
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Auto hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  // Handle error state
  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      setShowError(true);
      
      // Auto hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }, [state.errors]);

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

  return (
    <section id="contact" className="relative section-padding bg-dark">
      {/* Section number */}
      <div className="section-number" style={{ fontFamily: 'Syne, sans-serif' }}>07</div>
      
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
              LET'S BUILD SOMETHING →
            </h2>
            <div className="w-24 h-px bg-neon mx-auto mb-6"></div>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-surface border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:border-neon glow-input transition-all duration-300"
                    style={{ 
                      caretColor: '#00ff87',
                      color: '#ffffff',
                      backgroundColor: '#0d1117'
                    }}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-surface border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:border-neon glow-input transition-all duration-300"
                    style={{ 
                      caretColor: '#00ff87',
                      color: '#ffffff',
                      backgroundColor: '#0d1117'
                    }}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-surface border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:border-neon glow-input transition-all duration-300"
                    style={{ 
                      caretColor: '#00ff87',
                      color: '#ffffff',
                      backgroundColor: '#0d1117'
                    }}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-surface border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:border-neon glow-input transition-all duration-300 resize-none"
                    style={{ 
                      caretColor: '#00ff87',
                      color: '#ffffff',
                      backgroundColor: '#0d1117'
                    }}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="group w-full px-8 py-4 bg-neon/10 border border-neon/30 rounded-lg text-neon hover:bg-neon/20 transition-all duration-300 flex items-center justify-center gap-3 font-medium cursor-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!state.submitting ? { scale: 1.02 } : {}}
                  whileTap={!state.submitting ? { scale: 0.98 } : {}}
                >
                  {state.submitting ? (
                    <>
                      <FiLoader className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-neon/10 border border-neon/30 rounded-lg text-neon"
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}

              {/* Error Message */}
              {showError && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
                >
                  ❌ Something went wrong. Please email me directly at himangikunwar@gmail.com
                </motion.div>
              )}
            </motion.div>

            {/* Contact info and social links */}
            <motion.div className="space-y-12" variants={itemVariants}>
              {/* Contact info */}
              <div className="glass-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-neon mb-6 uppercase tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FiMail className="text-neon text-xl" />
                    <span className="text-white">{portfolioData.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-neon mb-6 uppercase tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Connect With Me
                </h3>
                <div className="flex gap-6">
                  <motion.a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-surface/50 border border-white/20 rounded-lg flex items-center justify-center text-white hover:text-neon hover:border-neon/50 transition-all duration-300 cursor-hover"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <FiGithub className="text-xl" />
                  </motion.a>
                  
                  <motion.a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-surface/50 border border-white/20 rounded-lg flex items-center justify-center text-white hover:text-glow hover:border-glow/50 transition-all duration-300 cursor-hover"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <FiLinkedin className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-neon/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 animate-pulse"></div>
      
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-cyan-400">HS</span>
            </div>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Kivairu Samuel
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-2"
        >
          (HexSentinel)
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Data Analyst · Ethical Hacker · Software Developer · Graphics Designer
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build ethical hacking labs, data apps, and tools that solve real problems.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="mailto:kivairusamuel9409@email.com"
            className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Contact Me
          </motion.a>
          
          <motion.a
            href="tel:+254757803607"
            className="flex items-center gap-3 border-2 border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} />
            +254 757 803 607
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6 mt-8"
        >
          <motion.a
            href="https://github.com/samkiva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
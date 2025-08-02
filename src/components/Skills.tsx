import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Code, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      skills: ["Kali Linux", "Penetration Testing", "Network Security", "Lab Setup", "Ethical Hacking", "Vulnerability Assessment"]
    },
    {
      title: "Data Science",
      icon: Database,
      gradient: "from-blue-500 to-purple-500",
      skills: ["R Programming", "Python", "Data Analysis", "Statistical Modeling", "Data Visualization", "Machine Learning"]
    },
    {
      title: "Web Development",
      icon: Code,
      gradient: "from-emerald-500 to-cyan-500",
      skills: ["React", "TypeScript", "HTML/CSS", "JavaScript", "Node.js", "Firebase"]
    },
    {
      title: "Design",
      icon: Palette,
      gradient: "from-pink-500 to-violet-500",
      skills: ["UI/UX Design", "Graphics Design", "Prototyping", "Design Systems", "Figma", "Adobe Creative Suite"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning cybersecurity, data science, development, and design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center group/skill"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mr-3 group-hover/skill:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
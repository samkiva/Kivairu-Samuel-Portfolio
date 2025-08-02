import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, BarChart3, Palette, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cybersecurity Lab",
      subtitle: "Mr. Robot Style Environment",
      description: "Kali+Windows dual-boot lab environment with network isolation & snapshots. Public write-ups omit sensitive details for responsible disclosure.",
      icon: Shield,
      tech: ["Kali Linux", "Windows", "VMware", "Network Security"],
      gradient: "from-red-500 to-orange-500",
      features: [
        "Network isolation and snapshots",
        "Dual-boot lab environment",
        "Ethical hacking practice",
        "Responsible disclosure practices"
      ]
    },
    {
      title: "AgriNova AI",
      subtitle: "Smart Agriculture Assistant",
      description: "WhatsApp-based smart-agriculture assistant using Mistral AI, n8n, Google Sheets & OpenWeatherMap. Role: UI/UX & flows. Prototype stage.",
      icon: Cpu,
      tech: ["Mistral AI", "n8n", "Google Sheets", "OpenWeatherMap"],
      gradient: "from-emerald-500 to-green-500",
      features: [
        "WhatsApp integration",
        "AI-powered recommendations",
        "Weather data integration",
        "Automated workflow management"
      ]
    },
    {
      title: "Data Science & R",
      subtitle: "Analytics & Visualization",
      description: "Reproducible R notebooks with integration techniques, series-test cheat-sheet, and applied visualizations for data-driven insights.",
      icon: BarChart3,
      tech: ["R", "Python", "Data Analysis", "Visualization"],
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Reproducible R notebooks",
        "Statistical analysis tools",
        "Data visualization dashboards",
        "Integration techniques"
      ]
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in cybersecurity, AI, and data science
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-semibold mb-4">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full border border-gray-600 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                      <Github size={16} />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300">
                      <ExternalLink size={16} />
                      Demo
                    </button>
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

export default Projects;
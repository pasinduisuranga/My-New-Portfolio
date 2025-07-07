import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Monitor, Globe, Database, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and modern web applications using latest technologies like React, TypeScript, and Node.js."
    },
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Creating modern, responsive user interfaces using React, TypeScript, and CSS frameworks like Tailwind CSS."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful and user-friendly interfaces with focus on user experience and modern design principles."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Developing robust backend systems with databases, APIs, and server-side technologies."
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end development solutions from concept to deployment with modern tech stacks."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, performance, and scalability with best practices."
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="min-h-screen py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of development services to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary p-3 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Ready to work on your next project</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

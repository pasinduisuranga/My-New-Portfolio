import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, Globe, User } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { label: 'Birthday', value: '30 Aug 2001', icon: Calendar },
    { label: 'Age', value: '24', icon: User },
    { label: 'Website', value: 'www.codexsrilanka.tech', icon: Globe },
    { label: 'Email', value: 'info@codex.com', icon: Mail },
    { label: 'UK HND', value: 'Pearson BTEC Level 5 HND', icon: Calendar },
    { label: 'WhatsApp', value: '+94 770861335', icon: Phone },
    { label: 'Location', value: 'Galle, Sri Lanka', icon: MapPin },
    { label: 'Freelance', value: 'Available', icon: User },
  ];

  const skills = [
    { name: 'C#', percentage: 76 },
    { name: 'Web Development', percentage: 56 },
    { name: 'PHP', percentage: 50 },
    { name: 'Java', percentage: 20 },
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                I'm Pasindu Isuranga{' '}
                <span className="gradient-text">Junior Software Engineer</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a Pearson BTEC Level 5 Higher National Diploma in Software 
                Engineering, I have developed skills in both front-end and back-end web development. 
                With a keen interest in robotics and software development, I enjoy exploring how 
                software integrates with hardware to build smart and automated systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <info.icon size={16} className="text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">{info.label}:</span>{' '}
                    <span className="text-muted-foreground">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                Download CV
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                Hire Me
              </button>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">{skill.name}</h5>
                    <span className="text-sm text-muted-foreground">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-2 bg-gradient-to-r from-primary to-pink-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

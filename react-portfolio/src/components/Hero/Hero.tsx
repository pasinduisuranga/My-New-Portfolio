import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Twitter, Instagram, Youtube, MessageCircle, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Web Developer', 'Software Engineer', 'Tech Enthusiast'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (currentIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentWordIndex, words]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // You can replace this with your actual CV file path
    const cvUrl = '/cv/Pasindu_Isuranga_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Pasindu_Isuranga_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 lg:pt-0">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium"
            >
              Hello, My name is{' '}
              <span className="gradient-text font-bold">Pasindu Isuranga</span>
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold"
            >
              I'm a{' '}
              <span className="gradient-text typing-cursor">
                {displayText}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              I'm a Junior Software Engineer and undergraduate student with an HND in Software 
              Engineering. I'm passionate about coding and eager to grow my skills in software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                Hire Me
              </button>
              
              <button 
                onClick={downloadCV}
                className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download CV
              </button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex gap-3 flex-wrap"
            >
              <a
                href="https://www.linkedin.com/in/pasindu-isuranaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/80 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://x.com/Pasidu_isuranga"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/pasindu_isuranga_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-[#E4405F] hover:bg-[#E4405F]/80 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://youtube.com/@SLCode_X"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-[#FF0000] hover:bg-[#FF0000]/80 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://discord.gg/pasindu"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-[#7289DA] hover:bg-[#7289DA]/80 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/pasinduisuranga"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-[#181717] hover:bg-[#181717]/80 transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-card border-4 border-primary/20">
                <img
                  src="/images/hero.jpg"
                  alt="Pasindu Isuranga"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-primary rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-primary rounded-br-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Moon, Sun, Palette } from 'lucide-react';

interface ColorTheme {
  name: string;
  primary: string;
  secondary: string;
  gradient: string;
}

const StyleSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTheme, setActiveTheme] = useState('color-1');

  const colorThemes: ColorTheme[] = [
    {
      name: 'color-1',
      primary: '0 84% 60%',
      secondary: '348 83% 58%',
      gradient: 'linear-gradient(135deg, hsl(0, 84%, 60%) 0%, hsl(348, 83%, 58%) 100%)'
    },
    {
      name: 'color-2',
      primary: '202 86% 65%',
      secondary: '210 79% 70%',
      gradient: 'linear-gradient(135deg, hsl(202, 86%, 65%) 0%, hsl(210, 79%, 70%) 100%)'
    },
    {
      name: 'color-3',
      primary: '142 69% 58%',
      secondary: '158 64% 52%',
      gradient: 'linear-gradient(135deg, hsl(142, 69%, 58%) 0%, hsl(158, 64%, 52%) 100%)'
    },
    {
      name: 'color-4',
      primary: '45 100% 68%',
      secondary: '35 100% 68%',
      gradient: 'linear-gradient(135deg, hsl(45, 100%, 68%) 0%, hsl(35, 100%, 68%) 100%)'
    },
    {
      name: 'color-5',
      primary: '16 100% 66%',
      secondary: '28 100% 68%',
      gradient: 'linear-gradient(135deg, hsl(16, 100%, 66%) 0%, hsl(28, 100%, 68%) 100%)'
    }
  ];

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('color-theme') || 'color-1';
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    
    setActiveTheme(savedTheme);
    setIsDarkMode(savedDarkMode);
    
    // Apply theme
    applyColorTheme(savedTheme);
    applyDarkMode(savedDarkMode);
  }, []);

  const applyColorTheme = (themeName: string) => {
    const theme = colorThemes.find(t => t.name === themeName);
    if (theme) {
      // Update Tailwind CSS variables
      document.documentElement.style.setProperty('--primary', theme.primary);
      document.documentElement.style.setProperty('--secondary', theme.secondary);
      // Also keep the custom gradient variable
      document.documentElement.style.setProperty('--gradient-primary', theme.gradient);
    }
  };

  const applyDarkMode = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (themeName: string) => {
    setActiveTheme(themeName);
    localStorage.setItem('color-theme', themeName);
    applyColorTheme(themeName);
  };

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode.toString());
    applyDarkMode(newDarkMode);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.div
        className="fixed right-6 bottom-6 lg:top-6 lg:bottom-auto z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <Settings 
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'group-hover:rotate-90'
            }`} 
          />
        </button>
      </motion.div>

      {/* Style Switcher Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-80 bg-card/95 backdrop-blur-md border-l border-border/50 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold">Style Switcher</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                {/* Dark Mode Toggle */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Theme Mode
                  </h4>
                  <button
                    onClick={handleDarkModeToggle}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between ${
                      isDarkMode 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isDarkMode ? (
                        <Moon className="w-5 h-5 text-primary" />
                      ) : (
                        <Sun className="w-5 h-5 text-orange-500" />
                      )}
                      <span className="font-medium">
                        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                      </span>
                    </div>
                    <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      isDarkMode ? 'bg-primary' : 'bg-muted'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform duration-300 ${
                        isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </div>
                  </button>
                </div>

                {/* Color Themes */}
                <div>
                  <h4 className="text-lg font-medium mb-4">Theme Colors</h4>
                  <div className="grid grid-cols-5 gap-3">
                    {colorThemes.map((theme) => (
                      <button
                        key={theme.name}
                        onClick={() => handleThemeChange(theme.name)}
                        className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                          activeTheme === theme.name 
                            ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-110' 
                            : 'hover:scale-105'
                        }`}
                        style={{ background: theme.gradient }}
                        title={theme.name.replace('-', ' ').toUpperCase()}
                      >
                        {activeTheme === theme.name && (
                          <div className="absolute inset-0 flex items-center justify-center text-white">
                            ✓
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Choose your preferred color scheme
                  </p>
                </div>

                {/* Preview */}
                <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border/50">
                  <h5 className="font-medium mb-2">Preview</h5>
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    <div className="h-2 bg-muted rounded-full w-3/4" />
                    <div className="h-2 bg-muted rounded-full w-1/2" />
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    handleThemeChange('color-1');
                    if (!isDarkMode) {
                      handleDarkModeToggle();
                    }
                  }}
                  className="w-full mt-6 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors duration-200 text-sm font-medium"
                >
                  Reset to Default
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StyleSwitcher;

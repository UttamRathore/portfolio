import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-gray-950/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
          >
            {/* <div className="relative">
              <Code2 className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg group-hover:bg-cyan-300/30 transition-all" />
            </div> */}
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Uttam Rathore
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950/98 backdrop-blur-md border-b border-cyan-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all mt-4"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
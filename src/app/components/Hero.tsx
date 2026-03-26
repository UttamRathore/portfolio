import { motion } from 'motion/react';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">UTTAM RATHORE</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              2 years of experience building scalable CRM and SaaS-based web applications.
              Skilled in Angular, JavaScript, PHP (CodeIgniter), MySQL, Git and RESTful APIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection('#experience')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 font-semibold"
              >
                View My Work
              </button>
              <a
                href="/src/imports/Uttam-Rathore.pdf"
                download
                className="px-8 py-4 bg-white/5 border border-cyan-500/30 text-white rounded-lg hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 font-semibold flex items-center gap-2 group"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-gray-700 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-gray-700 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="mailto:uttamrathore244@gmail.com"
                className="p-3 bg-white/5 border border-gray-700 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  CRM
                </div>
                <div className="text-sm text-gray-400">Enterprise Systems</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        {/* <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </div> */}
      </motion.div>
    </section>
  );
}
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Briefcase, Rocket } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code2, label: 'Technologies Worked With', value: '10+' },
    { icon: Briefcase, label: 'Years Experience', value: '2+' },
    { icon: Rocket, label: 'Projects Contributed', value: '5+' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Developer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building software that delivers results and enhances efficiency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Full Stack Developer with 2 years of experience building scalable CRM and SaaS-based
                web applications. Skilled in Angular, JavaScript, PHP (CodeIgniter), MySQL, and RESTful
                APIs. Experienced in developing enterprise management systems and optimizing database
                performance. Passionate about building efficient, scalable, and user-centric web
                applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Core Competencies:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Enterprise CRM Development',
                    'SaaS Application Architecture',
                    'Database Optimization',
                    'RESTful API Development',
                    'MVC Architecture',
                    'CRUD Operations',
                  ].map((competency, index) => (
                    <motion.div
                      key={competency}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      <span className="text-gray-300">{competency}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <stat.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-3">What I Bring to the Table</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Clean, maintainable, and scalable code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Optimizes application performance and ensures high-quality user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Result-oriented professional, delivered high-quality work with focus and precision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Continuous learning mindset with a focus on modern technologies</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Wrench,
  FileJson,
  Palette,
  Package
} from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      color: 'from-cyan-400 to-blue-500',
      skills: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-purple-400 to-pink-500',
      skills: ['PHP', 'CodeIgniter', 'RESTful APIs'],
    },
    {
      title: 'Version Control System',
      icon: GitBranch,
      color: 'from-orange-400 to-red-500',
      skills: ['Git', 'GitHub', 'Bitbucket'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-green-400 to-emerald-500',
      skills: ['MySQL'],
    },
  ];

  const concepts = ['MVC Architecture', 'CRUD Operations', 'Database Optimization'];

  const technologies = [
    { name: 'Angular', icon: Code2 },
    { name: 'JavaScript', icon: FileJson },
    { name: 'PHP', icon: Server },
    { name: 'MySQL', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Bootstrap', icon: Palette },
    { name: 'CodeIgniter', icon: Package },
    { name: 'REST APIs', icon: Wrench },
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          {/* <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences
          </p> */}
        </motion.div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl px-6 py-4 hover:border-cyan-500/40 transition-all duration-300 hover:scale-110">
                <div className="flex items-center gap-3">
                  <tech.icon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-white font-medium">{tech.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`} />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 border border-current rounded-lg text-sm font-medium hover:scale-105 transition-all cursor-default`}
                      style={{
                        borderColor: category.color.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' :
                          category.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' :
                            category.color.includes('green') ? 'rgba(16, 185, 129, 0.3)' :
                              'rgba(251, 146, 60, 0.3)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concepts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl px-8 py-6">
            <h4 className="text-white font-semibold mb-4 text-lg">Core Concepts</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {concepts.map((concept, index) => (
                <motion.span
                  key={concept}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-medium hover:bg-cyan-500/20 transition-all cursor-default"
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

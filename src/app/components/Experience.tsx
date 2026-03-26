import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Panoptic Infotech Pvt. Ltd.',
      location: 'Jaipur, India',
      period: 'July 2024 - Present',
      type: 'Full-time',
      achievements: [
        'Developed and maintained Angular (TypeScript) based Insurance CRM applications with PHP (CodeIgniter) and MySQL, supporting internal business operations',
        'Implemented CRM modules including Employee Management, Travel Management, POSP Onboarding, Lead Management, Quotation Systems, and Reporting dashboards',
        'Automated lead processing by implementing vehicle detail lookup via mobile number and contact synchronization, improving CRM sales workflow efficiency',
      ],
      technologies: ['Angular', 'TypeScript', 'PHP', 'CodeIgniter', 'MySQL', 'REST APIs'],
    },
    {
      title: 'Internship',
      company: 'Panoptic Infotech Pvt. Ltd.',
      location: 'Jaipur, India',
      period: 'March 2024 - June 2024',
      type: 'Internship',
      achievements: [
        'Assisted in developing CRM features using Angular and PHP (CodeIgniter)',
        'Gained practical experience with CRUD operations, MVC architecture, and database management (MySQL)',
      ],
      technologies: ['Angular', 'PHP', 'CodeIgniter', 'MySQL', 'MVC Architecture'],
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
            Work Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My career path and achievements in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-16`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-950 z-10 animate-pulse" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                          </div>
                          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-cyan-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-cyan-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-cyan-400" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.4 + index * 0.2 + i * 0.1 }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-sm">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 0.6 + index * 0.2 + i * 0.05 }}
                              className="px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm hover:bg-cyan-500/10 transition-all cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Years of Experience', value: '2+', icon: Briefcase },
            { label: 'CRM Modules Developed', value: '8+', icon: CheckCircle2 },
            { label: 'Technologies Worked With', value: '10+', icon: Calendar },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all">
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: "Master Of Computer Applications (MCA)",
      institution: 'Vivekanand Global University',
      period: '2026 - Ongoing',
      status: 'Currently Pursuing',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      degree: "Bachelor's Of Science (B.Sc)",
      institution: 'University of Rajasthan',
      period: '2021 - 2024',
      status: 'Completed',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="education" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational journey in computer science and technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Academic Qualifications</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`} />
                <div className="relative bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-lg mt-1`}>
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                          <p className="text-cyan-400 font-semibold text-lg mb-2">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="h-4 w-4 text-cyan-400" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

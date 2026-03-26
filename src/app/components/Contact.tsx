import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const connectingChannels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'uttamrathore244@gmail.com',
      href: 'mailto:uttamrathore244@gmail.com',
      color: 'from-cyan-400 to-blue-500',
      description: 'Best way to reach me',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@UttamRathore',
      href: 'https://github.com/UttamRathore',
      color: 'from-gray-400 to-gray-600',
      description: 'Check out my code',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Uttam Rathore',
      href: 'https://www.linkedin.com/in/uttam-rathore-743a7629b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      color: 'from-blue-400 to-blue-600',
      description: "Let's connect professionally",
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's Build Something Great Together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-green-500/30 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">Location</h3>
                  <p className="text-xl text-gray-300 mt-1">Jaipur / Remote Available</p>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <p className="text-gray-400">
                Currently open to full-time positions, freelance projects, and remote collaborations.
              </p>
            </div>
          </motion.div>

          {/* Connecting Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Connecting Channels</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {connectingChannels.map((channel, index) => (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target={channel.label !== 'Email' ? '_blank' : undefined}
                  rel={channel.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative group block"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-300`} />
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:scale-105">
                    <div className={`p-4 bg-gradient-to-r ${channel.color} rounded-lg mb-4`}>
                      <channel.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">{channel.label}</h4>
                    <p className="text-cyan-400 text-sm mb-2 break-all">{channel.value}</p>
                    <p className="text-gray-500 text-xs">{channel.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8">
              <p className="text-gray-300 text-lg">
                Feel free to reach out through any of these channels.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
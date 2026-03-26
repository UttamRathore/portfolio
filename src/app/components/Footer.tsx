import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { name: 'About', href: '#about' },
          { name: 'Skills', href: '#skills' },
          { name: 'Experience', href: '#experience' },
          { name: 'Education', href: '#education' },
        ],
      },
      {
        title: 'More',
        links: [
          { name: 'Contact', href: '#contact' },
          { name: 'Download Resume', href: '/src/imports/Uttam-Rathore.pdf' },
        ],
      },
    ],
    social: [
      { name: 'GitHub', icon: Github, href: 'https://github.com/UttamRathore' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/uttam-rathore-743a7629b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
      { name: 'Email', icon: Mail, href: 'mailto:uttamrathore244@gmail.com' },
    ],
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-950 border-t border-cyan-500/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                Full Stack Developer
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Passionate about building scalable CRM and SaaS applications that drive business growth.
                Always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <div className="flex gap-4">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 group"
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : window.open(link.href)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Full Stack Developer Portfolio. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Designed and developed by Uttam Rathore
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
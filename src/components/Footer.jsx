import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { cn } from '../lib/utils';

function Footer({ className }) {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/thisisthebigo' },
    { icon: <FaEnvelope />, href: 'mailto:thisisthebigo@gmail.com' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/groups/10014219/' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/thisisthebigo/' },
  ];

  return (
    <footer id="contact" className={cn('bg-black text-white py-8 md:py-12 px-4 pb-24 md:pb-28', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold">Tech Habba 2025</h3>
            <p className="text-sm md:text-base text-gray-400">The Future of Technology, Today.</p>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                aria-label={`Visit our ${link.href.split('.')[1]} page`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 md:mt-8 border-t border-gray-800 pt-4 md:pt-6 text-center text-gray-500">
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Tech Habba. All rights reserved.</p>
          <p className="text-xs md:text-sm mt-1 md:mt-2">
            Designed and Developed by Acharya Institutes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
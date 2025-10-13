import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold">Tech Habba 2025</h3>
            <p className="text-gray-400">The Future of Technology, Today.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tech Habba. All rights reserved.</p>
          <p className="text-sm mt-2">
            Designed and Developed by Acharya Institutes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
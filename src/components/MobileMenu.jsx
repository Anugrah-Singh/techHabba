import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HoveredLink } from '../ui/navbar-menu';

const MobileMenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-lg md:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-black dark:bg-white mb-1.5"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-black dark:bg-white mb-1.5"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-black dark:bg-white"
        />
      </div>
    </button>
  );
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuItems = [
    {
      title: "Home",
      links: [
        { href: "/", label: "Welcome" },
        { href: "/about", label: "About Tech Habba" }
      ]
    },
    {
      title: "About Acharya",
      links: [
        { href: "#about-acharya", label: "About Acharya" }
      ]
    },
    {
      title: "Events",
      links: [
        { href: "/events", label: "All Events" },
        { href: "/workshops", label: "Workshops" },
        { href: "/competitions", label: "Competitions" }
      ]
    },
    {
      title: "Speakers",
      links: [
        { href: "/speakers", label: "Featured Speakers" },
        { href: "/schedule", label: "Schedule" }
      ]
    },
    {
      title: "Sponsors",
      links: [
        { href: "/sponsors", label: "Our Sponsors" },
        { href: "/partners", label: "Partners" }
      ]
    },
    {
      title: "Contact",
      links: [
        { href: "/contact", label: "Get in Touch" },
        { href: "/register", label: "Register" }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black bg-opacity-90 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-20">
              {/* Logo */}
              <div className="mb-8 text-center">
                <img
                  src="/Acharya white logo.png"
                  alt="Acharya Logo"
                  className="h-12 w-auto mx-auto dark:block hidden"
                />
                <img
                  src="/acharya org logo.png"
                  alt="Acharya Logo"
                  className="h-12 w-auto mx-auto dark:hidden block"
                />
              </div>

              {/* Menu Items */}
              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <div className="space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                      {item.links.map((link) => (
                        <div key={link.href}>
                          <HoveredLink
                            href={link.href}
                            onClick={handleLinkClick}
                            className="block py-2 text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                          >
                            {link.label}
                          </HoveredLink>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </nav>

              {/* TBO Logo */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                <img
                  src="/TBO black (1).png"
                  alt="TBO Logo"
                  className="h-8 w-auto mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { MobileMenuButton, MobileMenu };
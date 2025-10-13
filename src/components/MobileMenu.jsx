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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed inset-0 z-50 bg-white dark:bg-black overflow-y-auto"
              onClick={() => setIsOpen(false)}
            >
              <div className="px-6 py-12 md:py-20 max-w-3xl mx-auto">
                {/* Logo */}
                <div className="mb-6 text-center">
                  <img
                    src="/Acharya white logo.png"
                    alt="Acharya Logo"
                    className="max-w-full h-auto mx-auto dark:block hidden"
                  />
                  <img
                    src="/acharya org logo.png"
                    alt="Acharya Logo"
                    className="max-w-full h-auto mx-auto dark:hidden block"
                  />
                </div>

                {/* Menu Items */}
                <nav className="space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 + 0.05 }}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <div className="space-y-2 pl-2">
                        {item.links.map((link) => (
                          <div key={link.href}>
                            <HoveredLink
                              href={link.href}
                              onClick={handleLinkClick}
                              className="block py-3 text-lg md:text-xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
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
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                  <img
                    src="/TBO black (1).png"
                    alt="TBO Logo"
                    className="max-w-full h-auto mx-auto"
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
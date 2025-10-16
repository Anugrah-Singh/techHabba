import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HoveredLink } from '../ui/navbar-menu';

const MobileMenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden flex-shrink-0"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="w-7 h-6 flex flex-col justify-center items-center">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-full h-0.5 bg-black dark:bg-white mb-1.5 origin-center"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-full h-0.5 bg-black dark:bg-white mb-1.5"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-full h-0.5 bg-black dark:bg-white origin-center"
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
        { href: "/", label: "Home" },
        { href: "#about-acharya", label: "About Acharya" }
      ]
    },
    {
      title: "Events",
      links: [
        { href: "#events", label: "View Events" }
      ]
    },
    {
      title: "Contact",
      links: [
        { href: "#contact", label: "Get in Touch" }
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
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] z-50 bg-white dark:bg-black overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-20 md:py-20">
                {/* Menu Items */}
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <h3 className="text-base font-semibold text-black dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="space-y-1 pl-3 border-l-2 border-gray-200 dark:border-gray-700">
                        {item.links.map((link) => (
                          <div key={link.href}>
                            <HoveredLink
                              href={link.href}
                              onClick={handleLinkClick}
                              className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
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
                <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700">
                  <img
                    src="/TBO black (1).png"
                    alt="TBO Logo"
                    className="h-6 w-auto"
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
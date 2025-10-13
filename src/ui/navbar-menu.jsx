import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onMouseLeave,
  handleLinkClick,
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} onMouseLeave={onMouseLeave} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {React.Children.map(children, (child) =>
                    React.cloneElement(child, { onClick: handleLinkClick })
                  )}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ children, onMouseLeave }) => {
  return (
    <nav
      data-nav-root
      onMouseLeave={onMouseLeave}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, href, onClick, ...rest }) => {
  const isExternal = href.startsWith('http');
  const isAnchor = href.startsWith('#');

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
      >
        {children}
      </a>
    );
  }

  if (isAnchor) {
    const handleClick = (e) => {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navElement = document.querySelector('[data-nav-root]');
        const navRect = navElement?.getBoundingClientRect();
        const navHeight = navRect?.height ?? 0;
        const extraSpacing = 40; // account for floating navbar offset and breathing space
        const offset = navHeight + extraSpacing;
        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const targetPosition = Math.max(elementTop - offset, 0);
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    };
    return (
      <a
        href={href}
        onClick={handleClick}
        {...rest}
        className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
    >
      {children}
    </Link>
  );
};

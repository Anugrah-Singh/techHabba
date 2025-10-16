import React, { useState, useRef, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { MobileMenuButton, MobileMenu } from "./MobileMenu";
import { useIsMobile } from "../hooks/useMediaQuery";
import { cn } from "../lib/utils";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only apply scroll behavior on desktop
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down past threshold, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleLinkClick = () => {
    setActive(null);
  };

  const wrappedSetActive = (item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActive(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActive(null), 100);
  };

  return (
    <>
      {/* Mobile Navigation */}
      {isMobile ? (
        <>
          {/* Mobile Top Bar */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="relative px-4 py-3 min-h-[56px]">
              {/* Hamburger Menu Button - Left Side */}
              <div className="inline-block">
                <MobileMenuButton isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
              </div>
              
              {/* TBO Logo on the right - Absolutely positioned */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <img
                  src="/TBO black (1).png"
                  alt="TBO Logo"
                  className="h-6 w-auto sm:h-7"
                />
              </div>
            </div>
          </div>
          <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
        </>
      ) : (
        /* Desktop Navigation */
        <div
          className={cn(
            "fixed top-10 inset-x-0 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
            className
          )}
        >
          <div className="relative">
            {/* TBO Logo on the right */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50">
              <img
                src="/TBO black (1).png"
                alt="TBO Logo"
                className="h-7 w-auto lg:h-9"
              />
            </div>
            <Menu onMouseLeave={handleMouseLeave}>
              <MenuItem setActive={wrappedSetActive} active={active} item="Home" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/">Home</HoveredLink>
                  <HoveredLink href="#about-acharya">About Acharya</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={wrappedSetActive} active={active} item="Events" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#events">View Events</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={wrappedSetActive} active={active} item="Contact" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#contact">Get in Touch</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
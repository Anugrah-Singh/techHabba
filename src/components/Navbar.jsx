import React, { useState, useRef } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { MobileMenuButton, MobileMenu } from "./MobileMenu";
import { useIsMobile } from "../hooks/useMediaQuery";
import { cn } from "../lib/utils";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const isMobile = useIsMobile();

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
          <MobileMenuButton isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
          <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
        </>
      ) : (
        /* Desktop Navigation */
        <div
          className={cn(
            "fixed top-10 inset-x-0 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto z-50 bg-black",
            className
          )}
        >
          {/* TBO Logo on the right */}
          <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-50">
            <img
              src="/TBO black (1).png"
              alt="TBO Logo"
              className="h-6 w-auto lg:h-8"
            />
          </div>
          <Menu onMouseLeave={handleMouseLeave}>
            <MenuItem setActive={wrappedSetActive} active={active} item="Home" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/" className="text-white">Welcome</HoveredLink>
                <HoveredLink href="/about" className="text-white">About Tech Habba</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={wrappedSetActive} active={active} item="About Acharya" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#about-acharya" className="text-white">About Acharya</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={wrappedSetActive} active={active} item="Events" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/events" className="text-white">All Events</HoveredLink>
                <HoveredLink href="/workshops" className="text-white">Workshops</HoveredLink>
                <HoveredLink href="/competitions" className="text-white">Competitions</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={wrappedSetActive} active={active} item="Speakers" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/speakers" className="text-white">Featured Speakers</HoveredLink>
                <HoveredLink href="/schedule" className="text-white">Schedule</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={wrappedSetActive} active={active} item="Sponsors" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/sponsors" className="text-white">Our Sponsors</HoveredLink>
                <HoveredLink href="/partners" className="text-white">Partners</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={wrappedSetActive} active={active} item="Contact" onMouseLeave={handleMouseLeave} handleLinkClick={handleLinkClick}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/contact" className="text-white">Get in Touch</HoveredLink>
                <HoveredLink href="/register" className="text-white">Register</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
}

export default Navbar;
import React, { useState, useRef } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../lib/utils";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const timeoutRef = useRef(null);

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
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* Logo on the left */}
      {/* <div className="absolute left-7 top-1/2 transform -translate-y-1/2 z-50">
        <img
          src="/Acharya white logo.png"
          alt="Acharya Logo"
          className="h-8 w-auto"
        />
      </div> */}
      {/* TBO Logo on the right */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-50">
        <img
          src="/TBO black (1).png"
          alt="TBO Logo"
          className="h-8 w-auto"
        />
      </div>
      <Menu onMouseLeave={handleMouseLeave}>
        <MenuItem setActive={wrappedSetActive} active={active} item="Home" onMouseLeave={handleMouseLeave}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Welcome</HoveredLink>
            <HoveredLink href="/about">About Tech Habba</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={wrappedSetActive} active={active} item="About Acharya" onMouseLeave={handleMouseLeave}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-acharya">About Acharya</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={wrappedSetActive} active={active} item="Events" onMouseLeave={handleMouseLeave}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/events">All Events</HoveredLink>
            <HoveredLink href="/workshops">Workshops</HoveredLink>
            <HoveredLink href="/competitions">Competitions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={wrappedSetActive} active={active} item="Speakers" onMouseLeave={handleMouseLeave}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/speakers">Featured Speakers</HoveredLink>
            <HoveredLink href="/schedule">Schedule</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={wrappedSetActive} active={active} item="Sponsors" onMouseLeave={handleMouseLeave}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sponsors">Our Sponsors</HoveredLink>
            <HoveredLink href="/partners">Partners</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={wrappedSetActive} active={active} item="Contact" onMouseLeave={handleMouseLeave}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Get in Touch</HoveredLink>
            <HoveredLink href="/register">Register</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
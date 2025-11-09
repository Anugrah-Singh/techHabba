import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconCalendarEvent,
  IconSchool,
  IconTimeline,
  IconMail,
  IconUserStar,
} from "@tabler/icons-react";

export function FloatingNav() {
  const navItems = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Chief Guest",
      icon: (
        <IconUserStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#chief-guest",
    },
    {
      title: "Events",
      icon: (
        <IconCalendarEvent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#events",
    },
    {
      title: "About Acharya",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about-acharya",
    },
    {
      title: "Timeline",
      icon: (
        <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#timeline",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex items-center justify-center w-full">
      <FloatingDock
        items={navItems}
        desktopClassName="max-w-fit"
        mobileClassName="translate-x-0 md:translate-x-0"
      />
    </div>
  );
}

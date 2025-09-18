"use client";
import Link from "next/link"; // <--- import Link
import ThemeToggle from "./theme-toggle";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FileText,
  Image,
  Clock,
  Menu,
  X,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-GB", { hour12: false });
}

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/skills", label: "skills", icon: Briefcase },
    { href: "/project", label: "project", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail }


  ];

  return (
    <header className="fixed top-0 w-full border-b dark:border-zinc-800 dark:bg-black/40 backdrop-blur-md z-50 font-karla shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Location */}
        <div className="dark:text-muted-foreground  text-gray-700">India/Mumbai</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 dark:text-muted-foreground  text-gray-700">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center space-x-1 hover:text-violet-400"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Right side: Clock + Theme */}
        <div className="hidden sm:flex items-center space-x-4">
          <Clock className="w-4 h-4 text-violet-400" />
          <span className="font-mono dark:text-muted-foreground  text-gray-700">
            {currentTime ? formatTime(currentTime) : "--:--:--"}
          </span>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-violet-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Animated Mobile Nav Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-black/90 border-t dark:border-zinc-800 shadow:md px-6 py-4 space-y-4 dark:text-muted-foreground  text-gray-700"
          >
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center space-x-2 hover:text-violet-400"
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Clock + Theme inside mobile menu */}
            <div className="flex items-center space-x-4 pt-4 border-t dark:border-zinc-800  border-zinc-600">
              <Clock className="w-4 h-4 text-violet-400" />
              <span className="font-mono">
                {currentTime ? formatTime(currentTime) : "--:--:--"}
              </span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

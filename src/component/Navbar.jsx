import React, { useState } from "react";
import { Menu, X, User, FolderKanban, Mail } from "lucide-react"; // Icons for nav items

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* === Logo === */}
        <h1 className="text-2xl font-extrabold tracking-wide text-red-500">&lt;Vishal/&gt;</h1>

        {/* === Desktop Menu === */}
        <nav className="hidden md:flex space-x-8 text-base font-medium">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
          >
            <User size={20} />
            About
          </a>
          <a
            href="#projects"
            className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
          >
            <FolderKanban size={20} />
            Projects
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
          >
            <Mail size={20} />
            Contact
          </a>
        </nav>

        {/* === Mobile Toggle Button === */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-300">
          <nav className="px-4 py-3 flex justify-around text-center">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col items-center text-sm text-gray-700 hover:text-indigo-600"
            >
              <User size={24} />
              <span className="mt-1">About</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col items-center text-sm text-gray-700 hover:text-indigo-600"
            >
              <FolderKanban size={24} />
              <span className="mt-1">Projects</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col items-center text-sm text-gray-700 hover:text-indigo-600"
            >
              <Mail size={24} />
              <span className="mt-1">Contact</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X, User, FolderKanban, Mail } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [showNavbar, setShowNavbar] = useState(true);

  const links = [
    { href: "#about", label: "About", icon: <User size={20} /> },
    { href: "#projects", label: "Projects", icon: <FolderKanban size={20} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16">
        {/* === Logo === */}
        <h1 className="text-3xl font-extrabold tracking-widest text-white select-none hover:scale-105 transition-transform">
          &lt;Vishal/&gt;
        </h1>

        {/* === Desktop Menu === */}
        <nav className="hidden md:flex space-x-10 text-base font-semibold">
          {links.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(label.toLowerCase())}
              className={`group relative flex flex-col items-center text-gray-700 dark:text-gray-200 
                hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300
                ${active === label.toLowerCase() ? "text-red-700 dark:text-red-500" : ""}`}
            >
              <div className="mb-1">{icon}</div>
              <span
                className={`absolute bottom-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full
                  transition-all duration-300
                  ${active === label.toLowerCase() ? "w-full" : "group-hover:w-full"}`}
              />
              <span className="relative">{label}</span>
            </a>
          ))}
        </nav>

        {/* === Mobile Toggle Button === */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg animate-slide-down">
          <nav className="flex flex-col py-4 space-y-3 text-center">
            {links.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActive(label.toLowerCase());
                }}
                className="flex flex-col items-center text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
              >
                {React.cloneElement(icon, { size: 26, className: "mb-1" })}
                <span className="text-sm font-semibold">{label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* === Animations === */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;

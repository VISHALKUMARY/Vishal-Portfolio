import React, { useState } from "react";
import { Menu, X, User, FolderKanban, Mail } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optional: track active section, here simplified as example (can be improved)
  const [active, setActive] = useState("about");

  const links = [
    { href: "#about", label: "About", icon: <User size={20} /> },
    { href: "#projects", label: "Projects", icon: <FolderKanban size={20} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16">
        {/* === Logo === */}
        <h1 className="text-3xl font-extrabold tracking-widest text-red-600 select-none">
          &lt;Vishal/&gt;
        </h1>

        {/* === Desktop Menu === */}
        <nav className="hidden md:flex space-x-10 text-base font-semibold">
          {links.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(label.toLowerCase())}
              className={`
                relative flex flex-col items-center text-gray-700 
                hover:text-red-600 transition-colors duration-300
                ${active === label.toLowerCase() ? "text-red-600" : ""}
              `}
            >
              <div className="mb-1">{icon}</div>

              {/* Animated underline */}
              <span
                className={`
                  absolute bottom-0 h-[2px] w-0 bg-indigo-600 rounded-full
                  transition-all duration-300
                  ${active === label.toLowerCase() ? "w-full" : "group-hover:w-full"}
                `}
              />
              <span className="relative">{label}</span>
            </a>
          ))}
        </nav>

        {/* === Mobile Toggle Button === */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4 space-y-3 text-center">
            {links.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActive(label.toLowerCase());
                }}
                className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                {React.cloneElement(icon, { size: 26, className: "mb-1" })}
                <span className="text-sm font-semibold">{label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;

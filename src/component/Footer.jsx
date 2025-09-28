import React from "react";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      {/* === Animated Gradient Divider === */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid gap-12 md:grid-cols-3 text-center md:text-left">
        {/* === Brand Section === */}
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 tracking-wide drop-shadow-md">
            Vishal Kumar
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Full-Stack Developer crafting elegant web experiences with React,
            MERN & modern tooling.
          </p>
        </div>

        {/* === Quick Links === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative inline-block transition-transform duration-300 hover:scale-105 
                             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                             after:w-0 after:bg-gradient-to-r after:from-red-400 after:to-orange-400
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* === Socials === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Connect</h3>
          <div className="flex justify-center md:justify-start gap-6">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/share/1AebAJuQTs/" },
              { Icon: Instagram, href: "https://www.instagram.com/vixhal_.10x" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vishal-kumar-71a2a5251" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gray-800/60 backdrop-blur-sm 
                           hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500
                           transition-all duration-300 shadow-md hover:shadow-red-500/40"
              >
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="relative border-t border-gray-700/50 py-6 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Vishal Kumar • Built with ❤️ using React & Tailwind CSS
        </p>

        {/* Back-to-top floating button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 -top-6 bg-gradient-to-r from-red-500 to-orange-500
                     text-white p-3 rounded-full shadow-lg hover:shadow-red-500/50
                     transition-transform duration-300 hover:scale-110 hover:animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

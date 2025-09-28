import React, { useEffect, useState } from "react";
import './App.css'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const handleHover = (e) => {
      if (e.target.closest("button, a")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-red-500 shadow-lg transition-transform duration-100
        ${hovering ? "scale-0" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Outer Shadow Trail */}
      <div
        className={`fixed pointer-events-none z-40 w-12 h-12 rounded-full bg-red-500/20 shadow-xl transition-transform duration-150
        ${hovering ? "scale-0" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default Cursor;

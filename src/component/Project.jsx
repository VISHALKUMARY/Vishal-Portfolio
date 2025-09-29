import React, { useState } from "react";
import Portfolio from "../assets/Portfolio.png";
import TaskTrek from "../assets/TaskTrek.png";
import assistent from "../assets/Assistent.png";
import editor from "../assets/editor.png";
import textconv from "../assets/textconv.png";
import food from "../assets/FoodsBits.png";
import calculator from "../assets/Calculater.png";
import tictoe from "../assets/tictoegame.png";
import Cards from "./Cards";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => setSelectedImage(item);
  const closeModal = () => setSelectedImage(null);

  const projectJson = [
    {
      title: "Portfolio",
      desc: "A modern personal portfolio showcasing my work, resume, and contact options.",
      image: Portfolio,
      live: "/",
      github: "https://github.com/Ajit2213/Portfolio",
    },
    {
      title: "TaskTrek",
      desc: "A sleek task and milestone manager with light/dark theme support and filtering.",
      image: TaskTrek,
      live: "https://tasktrek-delta.vercel.app/",
      github: "https://github.com/VISHALKUMARY/Tasktrek",
    },
    {
      title: "Image-Editor",
      desc: "Responsive photo editor allowing real-time adjustments and effects.",
      image: editor,
      live: "https://vishalkumary.github.io/Image-Editor/",
      github: "https://github.com/VISHALKUMARY/Image-Editor",
    },
    {
      title: "Virtual-Assistant",
      desc: "Dark-themed assistant interface with voice interaction and cyberpunk aesthetic.",
      image: assistent,
      live: "https://vishalkumary.github.io/Virtual-assistant/",
      github: "https://github.com/VISHALKUMARY/Virtual-assistant",
    },
    {
      title: "TextConverter",
      desc: "React-based tool for text transformation, translation, and PDF/image export.",
      image: textconv,
      live: "https://vishalkumary.github.io/Textconverter/",
      github: "https://github.com/VISHALKUMARY/Textconverter",
    },
    {
      title: "Food Store",
      desc: "Static Redux-powered food catalog with search, filter, and favorites.",
      image: food,
      live: "https://vishalkumary.github.io/Foods-Bits/",
      github: "https://github.com/VISHALKUMARY/Foods-Bits",
    },
    {
      title: "Calculator",
      desc: "Basic calculator performing all arithmetic operations with responsive layout.",
      image: calculator,
      live: "https://vishalkumary.github.io/CALCULATER/",
      github: "https://github.com/VISHALKUMARY/CALCULATER",
    },
    {
      title: "Tic-Tac-Toe Game",
      desc: "Classic 2-player Tic Tac Toe game with responsive grid and fun UI.",
      image: tictoe,
      live: "https://vishalkumary.github.io/Tic-Tac-Toe-Game/",
      github: "https://github.com/VISHALKUMARY/Tic-Tac-Toe-Game",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-10 border-b-4 border-red-500 inline-block pb-2">
          My Projects
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-12">
          {projectJson.map((item, index) => (
            <div
              key={index}
              className="w-full transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 rounded-2xl cursor-pointer"
            >
              <Cards item={item} onImageClick={handleImageClick} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== Image Modal ===== */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-6"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full bg-gray-800 p-6 rounded-2xl shadow-2xl border-2 border-red-500"
            onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-red-500 transition"
              aria-label="Close Modal"
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold mb-4 text-center text-red-400 select-none">
              {selectedImage.title}
            </h3>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg border border-red-400/50 shadow-lg"
              draggable={false}
            />

            <p className="mt-4 text-gray-300 text-center max-w-xl mx-auto px-2">
              {selectedImage.desc}
            </p>

            <div className="flex justify-center gap-6 mt-6 flex-wrap">
              {selectedImage.live && (
                <a
                  href={selectedImage.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 px-6 py-2 rounded-full text-white font-medium hover:bg-red-600 shadow-md transition"
                >
                  Live Demo
                </a>
              )}
              <a
                href={selectedImage.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-500 px-6 py-2 rounded-full text-white font-medium hover:bg-red-500 hover:text-white shadow-md transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Additional styling for accessibility and smoothness */}
      <style jsx>{`
        /* Smooth image loading */
        img {
          transition: transform 0.3s ease-in-out;
        }

        img:hover {
          transform: scale(1.02);
        }

        /* Prevent text selection on modal title */
        h3 {
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;

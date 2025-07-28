import React from "react";

const Cards = ({ item, onImageClick }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-red-500/40 transition duration-300 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        onClick={() => onImageClick(item)}
        className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
      />
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{item.desc}</p>
        <div className="flex gap-3 mt-4">
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500  text-white px-3 py-1 rounded-full text-sm"
            >
              Live
            </a>
          )}
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white  text-white  px-3 py-1 rounded-full text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;

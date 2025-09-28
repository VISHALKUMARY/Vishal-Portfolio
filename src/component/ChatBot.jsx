import React, { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Vishal's personal chatbot 🧡. Ask me anything about his projects or skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Unread badge logic
  useEffect(() => {
    if (!isOpen) {
      const newBotMsgs = messages.filter((m) => m.sender === "bot").length;
      setUnread(newBotMsgs);
    } else {
      setUnread(0);
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `You asked about "${userMessage.text}". I'll share Vishal's details soon!`,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        title={isOpen ? "Close chat" : "Chat with me"}
        className="relative bg-gradient-to-br from-orange-500 to-amber-600
                   text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110
                   transition-all duration-300 ring-2 ring-white/40 dark:ring-gray-700 mb-2"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
        {/* Unread Badge */}
        {!isOpen && unread > 0 && (
          <span
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold
                       w-5 h-5 flex items-center justify-center rounded-full
                       ring-2 ring-white dark:ring-gray-800 animate-pulse"
          >
            {unread}
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="flex flex-col w-[90vw] max-w-md h-[70vh] sm:h-[500px]
                     bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
                     rounded-3xl shadow-2xl overflow-hidden animate-fadeIn border border-orange-300 dark:border-orange-700"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-600
                          text-white px-5 py-3 font-semibold flex justify-between items-center
                          rounded-t-3xl shadow-md">
            <span className="flex items-center gap-2 text-lg">
              🧡 Vishal's ChatBot
            </span>
          </div>

          {/* Messages */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3
                       scrollbar-thin scrollbar-thumb-orange-400 dark:scrollbar-thumb-amber-500
                       scrollbar-track-transparent
                       bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-900 dark:to-gray-800"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-3xl max-w-[80%] break-words shadow-md
                    ${msg.sender === "user"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white animate-slideRight"
                      : "bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-gray-100 animate-slideLeft"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-3xl max-w-xs bg-white/70 dark:bg-gray-700
                                text-gray-900 dark:text-white shadow-md flex gap-1 items-center">
                  <span className="dot animate-bounce"></span>
                  <span className="dot animate-bounce delay-200"></span>
                  <span className="dot animate-bounce delay-400"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="flex border-t border-orange-300 dark:border-orange-700 p-3 gap-2
                          bg-orange-50/70 dark:bg-gray-800/70">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Vishal's projects..."
              className="flex-1 px-4 py-2 rounded-full outline-none
                         bg-white/80 dark:bg-gray-700 text-gray-900 dark:text-white
                         placeholder-gray-500 dark:placeholder-gray-400
                         focus:ring-2 focus:ring-orange-400 dark:focus:ring-amber-500 transition-all"
            />
            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-orange-500 to-amber-600
                         text-white px-4 py-2 rounded-full hover:brightness-110
                         focus:ring-2 focus:ring-orange-400 dark:focus:ring-amber-500
                         transition-all shadow-md"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slideRight {0%{transform:translateX(40%);opacity:0;}100%{transform:translateX(0);opacity:1;}}
        @keyframes slideLeft {0%{transform:translateX(-40%);opacity:0;}100%{transform:translateX(0);opacity:1;}}
        @keyframes fadeIn {from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);}}
        @keyframes bounce {0%,80%,100%{transform:scale(0);}40%{transform:scale(1);}}
        .animate-slideRight {animation: slideRight 0.3s ease-out;}
        .animate-slideLeft {animation: slideLeft 0.3s ease-out;}
        .animate-fadeIn {animation: fadeIn 0.35s ease-out;}
        .animate-bounce {animation: bounce 1.2s infinite;}
        .dot { width: 6px; height: 6px; background-color: #ea580c; border-radius: 50%; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default ChatBot;

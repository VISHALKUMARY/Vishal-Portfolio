// import React, { useState, useRef, useEffect } from "react";
// import { FiMessageCircle, FiX } from "react-icons/fi";
// import { qaData } from "../data/qaData";

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi! Ask me something." },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isTyping]);

//   const findAnswer = (userInput) => {
//     const match = qaData.find(
//       (qa) => qa.question.toLowerCase() === userInput.toLowerCase()
//     );
//     return match ? match.answer : "Sorry, I don't know the answer to that.";
//   };

//   const handleSend = (text = input) => {
//     if (!text.trim()) return;
//     const userMsg = { sender: "user", text };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     setIsTyping(true);
//     setTimeout(() => {
//       const botReply = { sender: "bot", text: findAnswer(text) };
//       setMessages((prev) => [...prev, botReply]);
//       setIsTyping(false);
//     }, 700);
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         className="fixed bottom-12 right-12 bg-gradient-to-br from-red-600 to-red-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50"
//         onClick={() => setIsOpen((prev) => !prev)}
//       >
//         {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-900 shadow-2xl rounded-xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 z-50 transition-all">
//           {/* Header */}
//           <div className="p-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-t-xl flex justify-between items-center shadow-md">
//             ChatBot
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex transition-all ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`px-4 py-2 rounded-2xl text-sm max-w-[75%] break-words shadow-md ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-br from-red-600 to-red-500 text-white animate-slide-right"
//                       : "bg-gray-200 dark:bg-gray-700 dark:text-white animate-slide-left"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}

//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-2xl text-sm shadow-md animate-pulse">
//                   Typing...
//                 </div>
//               </div>
//             )}

//             <div ref={bottomRef} />
//           </div>

//           {/* Quick Questions */}
//           <div className="p-2 flex flex-wrap gap-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
//             {qaData.map((qa, i) => (
//               <button
//                 key={i}
//                 className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-red-700 dark:to-red-800 text-red-800 dark:text-white px-3 py-1 rounded-full text-xs hover:scale-105 hover:brightness-110 transition-transform"
//                 onClick={() => handleSend(qa.question)}
//               >
//                 {qa.question}
//               </button>
//             ))}
//           </div>

//           {/* Input Box */}
//           <div className="p-3 flex border-t border-gray-200 dark:border-gray-700">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Type a question..."
//               className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
//             />
//             <button
//               onClick={() => handleSend()}
//               className="bg-gradient-to-br from-red-600 to-red-500 text-white px-4 rounded-r-full hover:scale-105 transition-transform"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;

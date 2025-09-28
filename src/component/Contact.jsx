import React, { useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import contact from "../assets/contact.json";
import Lottie from "lottie-react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    const userInfo = { name: data.name, email: data.email, message: data.message };
    try {
      await axios.post("https://getform.io/f/agdlkdqb", userInfo);
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-6"
    >
      {/* Decorative Blur Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-32 w-[28rem] h-[28rem] rounded-full bg-red-600/20 blur-[120px]" />
        <div className="absolute bottom-[-8rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-red-400/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        {/* ===== Left Section ===== */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400 text-4xl sm:text-5xl font-extrabold">
            Let’s Connect
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            I’m always open to new opportunities and collaborations.
            Drop a message and I’ll get back to you soon!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/share/1AebAJuQTs/" },
              { Icon: Instagram, href: "https://www.instagram.com/vixhal_.10x" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vishal-kumar-71a2a5251" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gray-800/50 hover:bg-red-500/30 transition"
              >
                <Icon className="w-7 h-7 text-white group-hover:text-red-400 transition" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition">
                  {Icon.name}
                </span>
              </a>
            ))}
          </div>

          {/* Lottie Animation */}
          <Lottie animationData={contact} className="w-[300px] mx-auto md:mx-0 lg:w-[450px]" />
        </div>

        {/* ===== Contact Form ===== */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-red-300/30 shadow-lg shadow-red-500/20
                     hover:shadow-red-400/40 transition duration-300"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Contact Me
          </h1>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="mt-2 w-full px-4 py-2 rounded-md bg-gray-900/60 text-white border border-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-300 outline-none transition"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">Name is required</p>}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="mt-2 w-full px-4 py-2 rounded-md bg-gray-900/60 text-white border border-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-300 outline-none transition"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">Email is required</p>}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-200">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message..."
              {...register("message", { required: true })}
              className="mt-2 w-full px-4 py-2 rounded-md bg-gray-900/60 text-white border border-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-300 outline-none transition"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">Message is required</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-lg
                       hover:scale-[1.02] hover:shadow-lg hover:shadow-red-400/40 transition-transform duration-300"
          >
            Send Message
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center mt-4">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-4">❌ Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

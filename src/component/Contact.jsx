import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react'; // ✅ Replaced images with icons
import contact from '../assets/contact.json';
import Lottie from 'lottie-react';
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
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

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
    <section id='contact' className='z-50 bg-gray-500 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Left Section */}
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className='flex space-x-4 text-white'>
              <a href="https://www.facebook.com/share/1AebAJuQTs/" target="_blank" rel="noopener noreferrer">
                <Facebook className='h-6 w-6 hover:text-red-400 transition' />
              </a>
              <a href="https://www.instagram.com/vixhal_.10x?igsh=MWNsYTk4dng1cXUybA==" target="_blank" rel="noopener noreferrer">
                <Instagram className='h-6 w-6 hover:text-red-400 transition' />
              </a>
              <a href="https://www.linkedin.com/in/vishal-kumar-71a2a5251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Linkedin className='h-6 w-6 hover:text-red-400 transition' />
              </a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>

          {/* Right Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10 mt-20'
          >
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>

            {/* Name */}
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type="text"
                id='name'
                placeholder='Full Name'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200'
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">Name is required</p>}
            </div>

            {/* Email */}
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                type="email"
                id='email'
                placeholder='Email'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200'
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">Email is required</p>}
            </div>

            {/* Message */}
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                placeholder='Enter Your Message'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200'
                {...register("message", { required: true })}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">Message is required</p>}
            </div>

            {/* Submit */}
            <button
              className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200'
              type='submit'
            >
              Send Message
            </button>

            {/* Status */}
            {status === "success" && (
              <p className='text-green-600 mt-3'>Your message has been sent successfully!</p>
            )}
            {status === "error" && (
              <p className='text-red-600 mt-3'>Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaProjectDiagram,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import {} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const Hero = () => {
  return (
    <section className="py-24 container max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0 relative">
          {/* 🌈 Colorful Bubbles Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Sky Blue */}
            <div className="absolute w-10 h-10 bg-sky-400/30 blur-xl rounded-full top-4 left-6 shadow-[0_0_30px_15px_rgba(56,189,248,0.5)] animate-bounce-slow" />
            {/* Pink */}
            <div className="absolute w-8 h-8 bg-pink-400/30 blur-2xl rounded-full bottom-10 right-8 shadow-[0_0_30px_10px_rgba(244,114,182,0.5)] animate-bounce-slower" />
            {/* Purple */}
            <div className="absolute w-6 h-6 bg-purple-400/30 blur-lg rounded-full top-20 right-4 shadow-[0_0_20px_10px_rgba(192,132,252,0.4)] animate-bounce-slowest" />
            {/* Yellow */}
            <div className="absolute w-5 h-5 bg-yellow-300/30 blur-xl rounded-full bottom-6 left-10 shadow-[0_0_25px_10px_rgba(253,224,71,0.4)] animate-bounce-slower" />
            {/* Emerald */}
            <div className="absolute w-7 h-7 bg-emerald-300/30 blur-xl rounded-full top-10 left-1/2 shadow-[0_0_25px_10px_rgba(110,231,183,0.4)] animate-bounce-slowest" />

            {/* 🔴 RED BUBBLES */}
            <div className="absolute w-10 h-10 bg-red-500/40 blur-2xl rounded-full top-1/2 left-2 shadow-[0_0_40px_20px_rgba(239,68,68,0.6)] animate-bounce-slower" />
            <div className="absolute w-8 h-8 bg-rose-500/40 blur-xl rounded-full bottom-16 left-1/3 shadow-[0_0_35px_15px_rgba(244,63,94,0.5)] animate-bounce-slowest" />
            <div className="absolute w-6 h-6 bg-orange-500/40 blur-xl rounded-full top-5 right-1/3 shadow-[0_0_25px_10px_rgba(249,115,22,0.5)] animate-bounce-slow" />
          </div>

          {/* 📸 Profile Image with Halo */}
          <div className="relative w-52 h-52 md:w-72 md:h-72 mx-auto md:mx-0 group transition-transform duration-500 hover:scale-105">
            {/* Soft glowing white outer halo */}
            <div className="absolute inset-0 rounded-full bg-white blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0" />

            {/* Profile with sky-blue glow */}
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-[0_0_60px_15px_rgba(56,189,248,0.6)] z-10">
              <Image
                src="/profile.png"
                alt="Abhi Profile"
                width={288}
                height={288}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right: Info Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-primary">Abhilash</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 min-h-[50px]">
            <Typewriter
              words={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Tech Explorer",
                "Problem Solver 💡",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mb-6 text-2xl">
            <Link
              href="https://github.com/abhi01820?tab=repositories"
              className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/m-abhilash-b2a903355/"
              className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com/abhilash_01820"
              className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaTwitter />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/70 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <FaProjectDiagram className="text-lg" />
              View Projects
            </Link>

            <Link
              href="/contact"
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-primary transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <MdContactMail className="text-lg" />
              Contact Me
            </Link>

            <a
              href="/resume.pdf"
              download
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <FaFileDownload className="text-lg" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter ,FaFileDownload, FaProjectDiagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";


const Hero = () => {
  return (
    <section className="py-24 container max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-52 h-52 md:w-72 md:h-72 mx-auto md:mx-0 group transition-transform duration-500 hover:scale-105">
            {/* Soft glowing white outer halo */}
            <div className="absolute inset-0 rounded-full bg-white blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0" />

            {/* Profile Image with white ring and inner highlight */}
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-lg shadow-white/40 z-10">
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

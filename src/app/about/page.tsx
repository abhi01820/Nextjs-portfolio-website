"use client";

import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaToolbox,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center leading-relaxed">
          I&apos;m a passionate Full Stack Developer with experience in building
          real-time, modern web applications. I specialize in both frontend and
          backend development to deliver seamless, efficient, and user-focused
          digital products.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section className="mb-20" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <ul className="text-secondary space-y-2">
              <li>C++ </li>
              <li>Python </li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </motion.div>

          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaPaintBrush className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React.js</li>
              <li> Next.js</li>
              <li>Tailwind CSS / Vite</li>
              <li>HTML5 / CSS3</li>
              <li>Bootstrap</li>
              <li>Shadcn UI</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaServer className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Authentication</li>
            </ul>
          </motion.div>

          {/* Databases */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaDatabase className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Databases</h3>
            <ul className="text-secondary space-y-2">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Neon DB (Used with basic PostgreSQL)</li>
              <li>Firebase Auth </li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaToolbox className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>VS-Code </li>
              <li>Version Control (Git, GitHub)</li>
              <li>Postman </li>
              <li>Render and Vercel (Deployment )</li>
              <li>Vapi AI</li>
              <li>Stream SDK </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaBrain className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Core Concepts</h3>
            <ul className="text-secondary space-y-2">
              <li>Object-Oriented Programming (OOP)</li>
              <li>Database Management Systems (DBMS)</li>
              <li>Data Structures & Algorithms (DSA - C++)</li>
              <li>System Design Fundamentals</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Journey Section with Animated Cards */}
      <motion.section className="mb-20" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
          What I’ve Been Doing
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Card 1 */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Real-time Full Stack Projects
            </h3>
            <p className="text-secondary leading-relaxed">
              Built full-fledged applications like:
              <br />
              • AI Voice Medical Assistant
              <br />
              • AI Voice Interview Preparation
              <br />
              • E-Commerce Bookstore
              <br />
              • Real-time Chat App with Video Call
              <br />
              These projects solve real-world problems and are built with modern
              tech stacks.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Self-Learning & Growth
            </h3>
            <p className="text-secondary leading-relaxed">
              Actively learning advanced concepts in system design, deployment,
              DevOps, and scalable application architecture. I continuously
              challenge myself through personal projects and open-source
              contributions to strengthen my engineering mindset.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              UI/UX Practice
            </h3>
            <p className="text-secondary leading-relaxed">
              Focused on building clean, responsive, and user-friendly
              interfaces. Practicing UI patterns, animations, and accessibility
              in each project to enhance user experience.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Career Building
            </h3>
            <p className="text-secondary leading-relaxed">
              Preparing for full stack internships and roles by mastering DSA in
              C++, building resume-ready projects, and contributing to technical
              discussions. Focused on communication skills, system-level
              thinking, and project ownership.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-primary mb-2">
              Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad •
              2022 - Present
            </p>
            <p className="text-secondary">
              Currently pursuing B.Tech with a focus on Full Stack Development,
              Software Engineering, and real-time application building. Actively
              building projects and preparing for high-growth career
              opportunities.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

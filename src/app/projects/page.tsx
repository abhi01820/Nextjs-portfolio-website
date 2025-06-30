"use client";

import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

// ✅ Correctly typed animation variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const, // ✅ This fixes the type error
      stiffness: 100,
      damping: 15,
    },
  },
};

const Projects = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
      <p className="text-lg text-secondary mb-24 text-center">
        Here are some of my recent projects. Click on the links to view the code or live demo.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={bubbleVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2 justify-between">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                >
                  <FaGithub className="w-5 h-5" /> <span>Code</span>
                </Link>
              )}
              {project.demoLink && (
                <Link
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

'use client';

import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

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
      type: 'spring' as const, // ✅ fixed typing
      stiffness: 80,
      damping: 12,
    },
  },
};

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            className="bg-white/60 dark:bg-dark/50 backdrop-blur-md rounded-3xl p-6 shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="relative aspect-video mb-4 rounded-xl overflow-hidden border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tech Tags */}
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

            {/* Links */}
            <div className="flex gap-4 justify-between mt-2">
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
    </section>
  );
};

export default Projects;

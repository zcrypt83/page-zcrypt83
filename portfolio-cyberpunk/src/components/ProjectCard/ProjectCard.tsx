'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projectsData';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const cardHoverVariants = {
  rest: {
    y: 0,
    // The initial border color is set by Tailwind class: border-electricBlue/30
    // boxShadow: '0 0 0px var(--electric-blue)', // Not needed if Tailwind handles initial
    scale: 1,
  },
  hover: {
    y: -8,
    borderColor: 'var(--hot-pink)', // This will override Tailwind's border color on hover if motion is efficient
    boxShadow: '0 0 20px var(--hot-pink), 0 0 5px var(--electric-blue)',
    scale: 1.03,
    transition: { type: 'spring', stiffness: 300, damping: 15 }
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const gifUrl = project.gifDemoUrl || 'https://placekitten.com/400/225'; // Default placeholder

  return (
    <motion.div
      className="project-card bg-darkMatteBlack rounded-none border-2 border-electricBlue/30 overflow-hidden flex flex-col h-full group"
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      // The whileInView for appearance is handled by the parent (Projects.tsx) for staggering
    >
      <div className="project-card-image-container relative w-full h-48 md:h-56 overflow-hidden border-b-2 border-electricBlue/30">
        <img
          src={gifUrl}
          alt={`Demo of ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" // Slower, more noticeable scale
        />
        {/* Gradient overlay and "View Details" text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-center p-4">
          <h4 className='text-hotPink text-lg font-bold'>View Details</h4>
        </div>
      </div>

      <div className="project-card-content p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-hotPink mb-2 leading-tight">{project.title}</h3>
        <p className="text-sm text-textSecondary mb-3 flex-grow">{project.description}</p>

        <div className="project-tags mb-4">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-electricBlue/20 text-electricBlue text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-none border border-electricBlue/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links mt-auto pt-3 border-t border-electricBlue/30 flex flex-wrap gap-2">
          {project.liveLink && (
            <motion.a
              href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="inline-block text-sm text-backgroundPrimary bg-electricBlue font-semibold py-2 px-3 rounded-none" // Ensure backgroundPrimary is dark for light text
              whileHover={{ scale: 1.05, backgroundColor: 'var(--hot-pink)', boxShadow: '0 0 10px var(--hot-pink)'}}
              transition={{ duration: 0.2 }}
            >
              Live Demo
            </motion.a>
          )}
          {project.repoLink && (
            <motion.a
              href={project.repoLink} target="_blank" rel="noopener noreferrer"
              className="inline-block text-sm text-electricBlue border-2 border-electricBlue font-semibold py-1.5 px-3 rounded-none"
              whileHover={{ scale: 1.05, backgroundColor: 'var(--electric-blue)', color: 'var(--dark-matte-black)', boxShadow: '0 0 10px var(--electric-blue)' }}
              transition={{ duration: 0.2 }}
            >
              Repo
            </motion.a>
          )}
          {project.writeupLink && (
            <motion.a
              href={project.writeupLink} target="_blank" rel="noopener noreferrer"
              className="inline-block text-sm text-matrixGreen border-2 border-matrixGreen font-semibold py-1.5 px-3 rounded-none"
              whileHover={{ scale: 1.05, backgroundColor: 'var(--matrix-green)', color: 'var(--dark-matte-black)', boxShadow: '0 0 10px var(--matrix-green)' }}
              transition={{ duration: 0.2 }}
            >
              CTF Writeup
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

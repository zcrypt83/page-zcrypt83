'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projectsData'; // Import sample project data
import ProjectCard from '@/components/ProjectCard/ProjectCard'; // Import ProjectCard component
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section py-16 bg-darkMatteBlack overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-electricBlue hover:shadow-neon-blue transition-shadow duration-300 ease-in-out"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          My Creations & Case Studies
        </motion.h2>

        <div
          className="horizontal-scroll-container flex overflow-x-auto pb-8" // scroll-snap-x-mandatory removed for now, can be added back
                                                                           // as it can be finicky with dynamic content widths
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              // Adjusted widths for better responsiveness and to show more cards
              className="project-scroll-item flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[33vw] xl:w-[28vw] pr-5 last:pr-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of the card is visible
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-textSecondary mt-4">
          (Scroll horizontally to view more projects)
        </p>
      </div>
    </section>
  );
};

export default Projects;

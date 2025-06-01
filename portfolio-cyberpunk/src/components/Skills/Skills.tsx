'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import './Skills.css';

// Placeholder data (Wireshark icon corrected)
const skillsData = {
  dev: [
    { id: 'dev1', name: 'React/Next.js', icon: '🧪', level: 'Advanced', description: 'Building dynamic UIs and SSR apps.' },
    { id: 'dev2', name: 'Node.js/Express', icon: '⚙️', level: 'Intermediate', description: 'Crafting robust server-side applications.' },
    { id: 'dev3', name: 'Python/Django', icon: '🐍', level: 'Intermediate', description: 'Developing web apps and automation scripts.' },
    { id: 'dev4', name: 'Docker', icon: '🐳', level: 'Proficient', description: 'Containerizing applications for deployment.' },
    { id: 'dev5', name: 'TypeScript', icon: 'ʦ', level: 'Advanced', description: 'Enhancing JavaScript with static typing.' },
    { id: 'dev6', name: 'GraphQL', icon: '📊', level: 'Intermediate', description: 'Querying APIs with precision.' },
  ],
  sec: [
    { id: 'sec1', name: 'Penetration Testing', icon: '🎯', level: 'Proficient', description: 'Identifying and exploiting vulnerabilities.' },
    { id: 'sec2', name: 'Metasploit', icon: '💣', level: 'Intermediate', description: 'Utilizing the Metasploit framework.' },
    { id: 'sec3', name: 'Burp Suite', icon: '📡', level: 'Proficient', description: 'Web application security testing.' },
    { id: 'sec4', name: 'Wireshark', icon: '🐟', level: 'Advanced', description: 'Network protocol analysis.' },
    { id: 'sec5', name: 'Nmap', icon: '🗺️', level: 'Advanced', description: 'Network discovery and security auditing.' },
    { id: 'sec6', name: 'SIEM Analysis', icon: '🛡️', level: 'Intermediate', description: 'Security Information and Event Management.' },
  ],
};

type SkillCategory = 'dev' | 'sec';

const cardVariants = {
  initial: {
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    boxShadow: '0 0 0px rgba(0,0,0,0)', // Start with no shadow or a very subtle one defined by Tailwind
  },
  hover: {
    rotateY: 10, // Reduced rotation for subtlety
    rotateX: 5,
    scale: 1.03,
    boxShadow: '0 0 20px var(--hot-pink)', // Neon shadow on hover
    transition: {
      type: 'spring',
      stiffness: 350,
      damping: 25,
    },
  },
};

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('dev');

  const handleFilterClick = (filter: SkillCategory) => {
    setActiveFilter(filter);
  };

  const currentSkills = skillsData[activeFilter];

  return (
    // Added perspective-container directly to the section for 3D context
    <section id="skills" className="skills-section py-16 bg-darkMatteBlack/80 backdrop-blur-sm perspective-container">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-electricBlue hover:shadow-neon-blue transition-shadow duration-300 ease-in-out">My Arsenal</h2>
        <p className="text-lg text-textSecondary mb-10">A glimpse into the tools and technologies I wield.</p>

        <div className="filter-buttons mb-10">
          <button
            onClick={() => handleFilterClick('dev')}
            className={`px-6 py-2 rounded-none mr-4 font-semibold transition-all duration-300 ease-in-out
                        ${activeFilter === 'dev' ? 'bg-hotPink text-backgroundPrimary shadow-neon-pink' : 'border-2 border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-backgroundPrimary hover:shadow-neon-blue'}`}
          >
            [ Development ]
          </button>
          <button
            onClick={() => handleFilterClick('sec')}
            className={`px-6 py-2 rounded-none font-semibold transition-all duration-300 ease-in-out
                        ${activeFilter === 'sec' ? 'bg-hotPink text-backgroundPrimary shadow-neon-pink' : 'border-2 border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-backgroundPrimary hover:shadow-neon-blue'}`}
          >
            [ Cybersecurity ]
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill-card bg-darkMatteBlack p-6 rounded-none border-2 border-electricBlue/50" // Removed hover:border-hotPink and hover:shadow-neon-pink as Framer Motion handles hover state
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-hotPink mb-2">{skill.name}</h3>
              <p className="text-sm text-electricBlue/80 mb-1">Level: {skill.level}</p>
              <p className="text-textSecondary text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Optional longer description for a modal or separate page
  gifDemoUrl: string; // URL or local path to a GIF or image
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  writeupLink?: string; // For CTF writeups or case studies
  category: 'dev' | 'sec' | 'other'; // To categorize projects
}

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Project Alpha: Sentinel Platform',
    description: 'A cutting-edge threat intelligence platform with real-time data analysis.',
    longDescription: 'Sentinel Platform was developed to provide proactive cybersecurity measures by aggregating and analyzing threat data from multiple sources. It features a modular design, allowing for easy integration of new intelligence feeds and analytical tools. The frontend is built with Next.js for optimal performance, while the backend relies on a Python/FastAPI stack for speed and scalability.',
    gifDemoUrl: '/gifs/sentinel-demo.gif', // Example local path
    tags: ['#NextJS', '#Python', '#FastAPI', '#ThreatIntel', '#Cybersecurity'],
    liveLink: '#',
    repoLink: '#',
    category: 'sec',
  },
  {
    id: 'proj2',
    title: 'Project Beta: GlitchArt Synthesizer',
    description: 'An interactive web application for creating generative glitch art from images.',
    longDescription: 'This project explores the intersection of art and code, allowing users to upload images and apply various algorithmic distortions to create unique glitch art. Built with React and p5.js for canvas manipulation, it offers a range of customizable parameters and real-time previews. The focus was on creating an intuitive yet powerful tool for digital artists.',
    gifDemoUrl: '/gifs/glitchart-demo.gif', // Example local path
    tags: ['#React', '#p5js', '#GenerativeArt', '#CreativeCoding', '#JavaScript'],
    liveLink: '#',
    repoLink: '#',
    category: 'dev',
  },
  {
    id: 'proj3',
    title: 'CTF Challenge: "RootTheBox" Writeup',
    description: 'A detailed walkthrough of a complex Capture The Flag challenge.',
    longDescription: 'This CTF involved multiple stages, including web application exploitation, privilege escalation, and reverse engineering. The writeup provides a step-by-step solution, explaining the methodologies and tools used at each stage. It serves as an educational resource for aspiring pentesters.',
    gifDemoUrl: '/gifs/ctf-demo.gif', // Example local path
    tags: ['#CTF', '#Writeup', '#WebAppSec', '#PrivEsc', '#ReverseEngineering'],
    writeupLink: '#',
    category: 'sec',
  },
  {
    id: 'proj4',
    title: 'Project Gamma: Decentralized ID Verifier',
    description: 'A proof-of-concept for a decentralized identity verification system using blockchain.',
    longDescription: 'Exploring Web3 technologies, Project Gamma aimed to build a system where users can control their identity attributes and selectively disclose them to verifiers without relying on a central authority. Smart contracts on Ethereum were used for managing identity claims.',
    gifDemoUrl: '/gifs/did-verifier-demo.gif', // Example local path
    tags: ['#Blockchain', '#Web3', '#Solidity', '#DecentralizedID', '#NextJS'],
    liveLink: '#',
    repoLink: '#',
    category: 'dev',
  }
];

// Helper function to get projects by category if needed later
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projectsData.filter(project => project.category === category);
};

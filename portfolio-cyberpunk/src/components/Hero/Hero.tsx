'use client';
import React, { useState, useEffect } from 'react';
import './Hero.css';

const phrases = [
  'Dev Full-Stack',
  'Pentester',
  'Open-Source Enthusiast',
  'Cybersecurity Analyst',
  'Bug Hunter'
];

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const delayBetweenPhrases = 1500;

    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        // Deleting
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        // Typing
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Phrase typed out, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, currentPhraseIndex, displayedText, isDeleting]);

  return (
    <section id="home" className="hero-section min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden">
      <div className="hero-background-placeholder absolute inset-0 z-0">
        <p className='text-xs text-gray-700 dark:text-gray-800 light:text-gray-400'>[Matrix Background Placeholder]</p>
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-textPrimary">&gt; whoami</span>
          <span className="text-hotPink"> → </span>
          <span className="text-electricBlue typing-effect">{displayedText}</span>
          <span className="cursor-blink">|</span>
        </h1>
        <p className="text-lg md:text-xl text-textSecondary mb-8 max-w-2xl mx-auto">
          Crafting secure and innovative digital experiences. Exploring the frontiers of technology from defensive CTI to offensive security.
        </p>
        <div>
          <a
            href="#projects"
            className="bg-hotPink text-backgroundPrimary font-bold py-3 px-6 rounded-none hover:bg-electricBlue hover:text-backgroundPrimary transition-all duration-300 text-lg shadow-neon-pink hover:shadow-neon-blue mr-4"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-electricBlue text-electricBlue font-bold py-3 px-6 rounded-none hover:bg-electricBlue hover:text-backgroundPrimary transition-all duration-300 text-lg hover:shadow-neon-blue"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

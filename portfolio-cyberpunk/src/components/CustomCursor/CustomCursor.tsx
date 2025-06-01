"use client"; // Add this directive for client-side hooks

import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, input, textarea, [role=button], select, label[for]')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    document.body.classList.add('hide-default-cursor');
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', () => setIsVisible(false));
    document.documentElement.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', () => setIsVisible(false));
      document.documentElement.removeEventListener('mouseenter', () => setIsVisible(true));
      document.body.classList.remove('hide-default-cursor');
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;

'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

const DynamicCustomCursor = dynamic(() => import('@/components/CustomCursor/CustomCursor'), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-backgroundPrimary text-textPrimary flex flex-col transition-colors duration-300">
      <DynamicCustomCursor />
      <header className="fixed top-0 left-0 right-0 z-50 p-4 border-b border-borderColor backdrop-blur-md bg-backgroundPrimary/80 transition-colors duration-300">
        <nav className="container mx-auto flex justify-between items-center">
          <p className="text-xl font-bold text-hotPink">Portfolio // Cyberpunk</p>
          <div className="flex items-center">
            <a href="#home" className="ml-4 text-textPrimary hover:text-hotPink transition-colors">Home</a>
            <a href="#skills" className="ml-4 text-textPrimary hover:text-hotPink transition-colors">Skills</a>
            <a href="#projects" className="ml-4 text-textPrimary hover:text-hotPink transition-colors">Projects</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4 pt-24">
        {children}
      </main>

      <footer className="w-full p-4 text-center border-t border-borderColor transition-colors duration-300">
        <p className="text-sm text-textSecondary">© $(date +%Y) - Hack the Planet</p>
      </footer>
    </div>
  );
};
export default Layout;

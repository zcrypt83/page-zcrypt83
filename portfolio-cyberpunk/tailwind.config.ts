import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: 'var(--electric-blue)',
        hotPink: 'var(--hot-pink)',
        darkMatteBlack: 'var(--dark-matte-black)',
        matrixGreen: 'var(--matrix-green)',
        terminalRed: 'var(--terminal-red)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        backgroundPrimary: 'var(--background-primary)',
        borderColor: 'var(--border-color)',
        gray: {
          100: '#f0f0f0',
          500: '#888888',
          600: '#555555',
          800: '#1a1a1a',
        }
      },
      fontFamily: {
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px var(--electric-blue), 0 0 10px var(--electric-blue), 0 0 15px var(--electric-blue), 0 0 20px var(--electric-blue)',
        'neon-pink': '0 0 5px var(--hot-pink), 0 0 10px var(--hot-pink), 0 0 15px var(--hot-pink), 0 0 20px var(--hot-pink)',
      }
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#05070B',
          900: '#07090E',
          850: '#0B0F19',
          800: '#101626',
          700: '#1A233A',
        },
        cyber: {
          cyan: '#00E5FF',
          violet: '#8A2BE2',
          mint: '#00F5A0',
          amber: '#FFB800',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

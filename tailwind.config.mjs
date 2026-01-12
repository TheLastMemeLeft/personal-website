/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',  // This turns on dark: prefixes (we use class="dark" on html)
  theme: {
    extend: {
      colors: {
        background: '#000000',   // Pure black background
        foreground: '#ffffff',   // White text
        muted: '#a0a0a0',        // Light gray for secondary text/lines
        accent: '#4a4a4a',       // Darker gray for borders/dividers
        primary: '#1e90ff',      // Blue accent for buttons/links (tech vibe)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Modern clean font (like Palantir style)
      },
      borderColor: {
        DEFAULT: '#4a4a4a',      // Makes all borders gray by default
      },
    },
  },
  plugins: [],
}
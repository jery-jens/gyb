/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',
        'title-primary': 'var(--title-primary)',
        'body-primary': 'var(--body-primary)',
        'border-primary': 'var(--border-primary)',
        'input-border': 'var(--input-border)',
        'input-background': 'var(--input-background)',
        'button-background': 'var(--button-background)',
        'button-text': 'var(--button-text)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'branding-primary': 'var(--branding-primary)',
        'branding-secondary': 'var(--branding-secondary)',
        'brand-primary-transparent': 'var(--brand-primary-transparent)',
        'brand-secondary-transparent': 'var(--brand-secondary-transparent)',
        'brand-error-transparent': 'var(--brand-error-transparent)',
      },
    },
  },
  plugins: [],
} 
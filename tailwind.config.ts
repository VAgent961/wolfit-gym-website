import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "on-surface": "#FFFFFF",
  "on-surface-variant": "#94A3B8",
  "surface-container": "#1A1D21",
  "surface-container-low": "#15181C",
  "surface-container-lowest": "#0A0C0F",
  "primary-container": "#FF4500",
  "on-primary-container": "#FFFFFF",
  "outline-variant": "#2D3139",
  "primary": "#FF4500",
  "secondary": "#FFFFFF",
  "accent": "#FF4500",
  "background": "#111418",
  "surface": "#1A1D21",
  "ink": "#FFFFFF",
  "muted": "#94A3B8",
  "dark": "#0A0C0F"
},
      fontFamily: {
  "heading": [
    "Bricolage Grotesque",
    "sans-serif"
  ],
  "body": [
    "IBM Plex Sans",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;

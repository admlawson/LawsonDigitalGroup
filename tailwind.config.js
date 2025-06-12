/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00B4D8", // Toyota TRD Wave Blue - Striking cyan-blue
          light: "#90E0EF",   // Icy, glacial light blue
          dark: "#0077B6",    // Deep cosmic blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0096C7", // Complementary deep blue
          light: "#48CAE4",   // Bright turquoise tone
          dark: "#023E8A",    // Navy cosmic depth
          foreground: "#FFFFFF",
        },
        wave: {
          // Additional Wave Blue variations
          50: "#F0FDFF",      // Lightest ice
          100: "#E6FAFE",     // Ice blue
          200: "#BAF1FD",     // Light wave
          300: "#7CE5FC",     // Miami blue light
          400: "#36D1FA",     // Bright turquoise
          500: "#00B4D8",     // Primary Wave Blue
          600: "#0096C7",     // Deeper wave
          700: "#0077B6",     // Ocean depth
          800: "#03045E",     // Deep cosmic
          900: "#023E8A",     // Darkest depth
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 180, 216, 0.07), 0 10px 20px -2px rgba(0, 180, 216, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 180, 216, 0.1), 0 10px 30px -5px rgba(0, 180, 216, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 180, 216, 0.15), 0 15px 25px -5px rgba(0, 180, 216, 0.1)',
        'wave': '0 4px 20px -2px rgba(0, 180, 216, 0.25), 0 8px 25px -5px rgba(72, 202, 228, 0.15)',
      },
      backgroundImage: {
        'wave-gradient': 'linear-gradient(135deg, #00B4D8 0%, #0096C7 25%, #0077B6 50%, #023E8A 100%)',
        'ice-gradient': 'linear-gradient(135deg, #F0FDFF 0%, #E6FAFE 25%, #BAF1FD 50%, #90E0EF 100%)',
        'cosmic-gradient': 'linear-gradient(135deg, #023E8A 0%, #03045E 50%, #0F172A 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "wave-shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "wave-shimmer": "wave-shimmer 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
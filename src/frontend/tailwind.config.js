/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        chart: {
          '1': 'oklch(var(--chart-1))',
          '2': 'oklch(var(--chart-2))',
          '3': 'oklch(var(--chart-3))',
          '4': 'oklch(var(--chart-4))',
          '5': 'oklch(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: 'oklch(var(--sidebar-primary))',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
          accent: 'oklch(var(--sidebar-accent))',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))'
        },
        pink: {
          50: 'oklch(0.98 0.01 350)',
          100: 'oklch(0.95 0.05 350)',
          200: 'oklch(0.90 0.08 350)',
          300: 'oklch(0.85 0.12 350)',
          400: 'oklch(0.80 0.14 350)',
          500: 'oklch(0.75 0.15 350)',
          600: 'oklch(0.65 0.14 350)',
          700: 'oklch(0.55 0.12 350)',
          800: 'oklch(0.45 0.10 350)',
          900: 'oklch(0.35 0.08 350)',
        },
        gold: {
          50: 'oklch(0.98 0.02 80)',
          100: 'oklch(0.95 0.05 80)',
          200: 'oklch(0.90 0.08 80)',
          300: 'oklch(0.85 0.12 80)',
          400: 'oklch(0.80 0.14 80)',
          500: 'oklch(0.75 0.15 80)',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'pink-glow': '0 4px 20px rgba(255, 77, 136, 0.3)',
        'pink-glow-lg': '0 8px 30px rgba(255, 77, 136, 0.4)',
        'gold-glow': '0 4px 20px rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'float': 'float 5s linear forwards',
        'fadeIn': 'fadeIn 0.5s ease-in',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

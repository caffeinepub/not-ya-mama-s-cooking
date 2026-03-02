import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        // Mexican palette tokens — OKLCH-based for opacity modifier support
        gold: {
          DEFAULT: 'oklch(var(--gold) / <alpha-value>)',
          light: 'oklch(var(--gold-light) / <alpha-value>)',
          dark: 'oklch(var(--gold-dark) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'oklch(var(--cream) / <alpha-value>)',
          dark: 'oklch(var(--cream-dark) / <alpha-value>)',
        },
        chili: {
          50:  'oklch(0.97 0.02 28)',
          100: 'oklch(0.93 0.04 28)',
          200: 'oklch(0.86 0.08 28)',
          300: 'oklch(0.76 0.12 28)',
          400: 'oklch(0.65 0.16 28)',
          500: 'oklch(0.55 0.20 28)',
          600: 'oklch(0.48 0.19 28)',
          700: 'oklch(0.40 0.17 28)',
          800: 'oklch(0.32 0.13 28)',
          900: 'oklch(0.24 0.09 28)',
          DEFAULT: 'oklch(0.48 0.19 28)',
        },
        sienna: {
          DEFAULT: 'oklch(0.55 0.15 40)',
          light: 'oklch(0.65 0.16 45)',
          dark: 'oklch(0.42 0.12 35)',
        },
        verde: {
          DEFAULT: 'oklch(0.45 0.12 145)',
          light: 'oklch(0.55 0.14 148)',
          dark: 'oklch(0.32 0.09 142)',
        },
        chart: {
          1: 'oklch(var(--chart-1))',
          2: 'oklch(var(--chart-2))',
          3: 'oklch(var(--chart-3))',
          4: 'oklch(var(--chart-4))',
          5: 'oklch(var(--chart-5))'
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
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
        warm: '0 4px 24px rgba(180, 60, 10, 0.18)',
        'warm-lg': '0 8px 40px rgba(180, 60, 10, 0.25)',
        gold: '0 4px 20px rgba(212, 160, 23, 0.3)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      }
    }
  },
  plugins: [typography, containerQueries, animate]
};

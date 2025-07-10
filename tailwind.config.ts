import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom AI Artists Color Palette
        blue_violet: {
          DEFAULT: "#9046cf",
          100: "#1d0b2c",
          200: "#391758",
          300: "#562283",
          400: "#722daf",
          500: "#9046cf",
          600: "#a56ad9",
          700: "#bb8fe2",
          800: "#d2b4ec",
          900: "#e8daf5",
        },
        orchid: {
          DEFAULT: "#cc59d2",
          100: "#2e0d2f",
          200: "#5b1a5e",
          300: "#89278e",
          400: "#b634bd",
          500: "#cc59d2",
          600: "#d67cdb",
          700: "#e09de4",
          800: "#ebbded",
          900: "#f5def6",
        },
        persian_pink: {
          DEFAULT: "#f487b6",
          100: "#450622",
          200: "#8a0d43",
          300: "#cf1365",
          400: "#ed418b",
          500: "#f487b6",
          600: "#f69ec4",
          700: "#f8b6d3",
          800: "#facee2",
          900: "#fde7f0",
        },
        seashell: {
          DEFAULT: "#fff3f0",
          100: "#631400",
          200: "#c62800",
          300: "#ff542a",
          400: "#ffa48d",
          500: "#fff3f0",
          600: "#fff5f3",
          700: "#fff8f6",
          800: "#fffaf9",
          900: "#fffdfc",
        },
        school_bus_yellow: {
          DEFAULT: "#fde12d",
          100: "#3b3301",
          200: "#756601",
          300: "#b09902",
          400: "#eacb02",
          500: "#fde12d",
          600: "#fde755",
          700: "#feed80",
          800: "#fef3aa",
          900: "#fff9d5",
        },
        // Keep existing shadcn colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config

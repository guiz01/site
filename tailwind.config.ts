import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        header: { // Nova cor para cabeçalho e rodapé
          DEFAULT: "hsl(var(--header-bg))",
          foreground: "hsl(var(--header-fg))",
        },
        "hero-gradient-start": { // Nova cor para o início do gradiente da Hero Section
          DEFAULT: "hsl(var(--hero-gradient-start))",
        },
        "hero-gradient-end": { // Nova cor para o fim do gradiente da Hero Section
          DEFAULT: "hsl(var(--hero-gradient-end))",
        },
        "hero-gradient-start-2": { // Nova cor para o início do gradiente da Hero Section
          DEFAULT: "hsl(var(--hero-gradient-start-2))",
        },
        "hero-gradient-end-2": { // Nova cor para o fim do gradiente da Hero Section
          DEFAULT: "hsl(var(--hero-gradient-end-2))",
        },
        "hero-gradient-start-3": { // Nova cor para o início do gradiente da Hero Section
          DEFAULT: "hsl(var(--hero-gradient-start-3))",
        },
        "hero-gradient-end-3": { // Nova cor para o fim do gradiente da Hero Section
          DEFAULT: "hsl(var(--hero-gradient-end-3))",
        },
        "whatsapp-green-start": { // Nova cor para o início do gradiente verde do WhatsApp
          DEFAULT: "hsl(var(--whatsapp-green-start))",
        },
        "whatsapp-green-end": { // Nova cor para o fim do gradiente verde do WhatsApp
          DEFAULT: "hsl(var(--whatsapp-green-end))",
        },
        "section-bg-light-start": {
          DEFAULT: "hsl(var(--section-bg-light-start))",
        },
        "section-bg-light-end": {
          DEFAULT: "hsl(var(--section-bg-light-end))",
        },
        "section-bg-dark-start": {
          DEFAULT: "hsl(var(--section-bg-dark-start))",
        },
        "section-bg-dark-end": {
          DEFAULT: "hsl(var(--section-bg-dark-end))",
        },
        "cta-gradient-start": {
          DEFAULT: "hsl(var(--cta-gradient-start))",
        },
        "cta-gradient-end": {
          DEFAULT: "hsl(var(--cta-gradient-end))",
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
        "active-nav": { // Nova cor para o background do item de navegação ativo
          DEFAULT: "hsl(var(--active-nav-bg))",
        },
        purpleButton: { // Nova cor para o botão de suporte
          DEFAULT: "hsl(var(--purple-button))",
          foreground: "hsl(var(--purple-button-foreground))",
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
} satisfies Config;
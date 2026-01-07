/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        titanium: "#4B496B",
        "titanium-dark": "#1e1b2e",
        "titanium-light": "#7875b3",
        electric: "#4338ca",
        "electric-light": "#6366f1",
        gold: "#EBCA2A",
        surface: "#F8FAFC",
        // Semáforo Fiados
        "status-red": "#ef4444",
        "status-orange": "#f97316",
        "status-green": "#10b981",
      },
      fontFamily: {
        sans: ["Lato", "system-ui", "sans-serif"],
      },
      animation: {
        "text-shimmer": "text-shimmer 6s ease-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        metal: "0 4px 20px -2px rgba(75, 73, 107, 0.15)",
        "glow-blue": "0 0 25px rgba(67, 56, 202, 0.25)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
      },
      backgroundImage: {
        "metal-gradient": "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      },
    },
  },
  plugins: [],
};

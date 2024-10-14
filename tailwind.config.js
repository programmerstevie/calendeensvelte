/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/routes/**/*.{js,ts,svelte}", "./src/lib/**/*.{js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        popup: "popup 1s ease",
        shimmer: "shimmer 1s ease"
      },
      keyframes: {
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 }
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Light & Dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name'" to any HTML element to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: ["bumblebee"]
  }
};

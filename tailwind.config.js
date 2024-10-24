const bumblebee = require("daisyui/src/theming/themes")["bumblebee"];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/routes/**/*.{js,ts,svelte}", "./src/lib/**/*.{js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neutral-content-secondary": "#e0e0e8d0"
      },
      boxShadow: {
        'simple': '0px 2px 2px 0px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        popup: "popup 1s ease",
        shimmer: "shimmer 1s ease",
        "shake-center": "shake-center 1s linear 0s 1 normal none",
        "bounce-realistic": "bounce-realistic 2s forwards",
        slideDown: "slideDown 5s ease-out forwards"
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
        },
        "shake-center": {
          "0%": { transform: "rotate(0deg)", "transform-origin": "50% 50%" },
          "10%": { transform: "rotate(8deg)" },
          "20%": { transform: "rotate(-10deg)" },
          "30%": { transform: "rotate(10deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(-10deg)" },
          "70%": { transform: "rotate(10deg)" },
          "80%": { transform: "rotate(-8deg)" },
          "90%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(0deg)", "transform-origin": "50% 50%" }
        },
        "bounce-realistic": {
          "0%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "10%": {
            transform: "translateY(-40%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "20%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
          "30%": {
            transform: "translateY(-20%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "40%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
          "50%": {
            transform: "translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "60%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
          "70%": {
            transform: "translateY(-7%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "80%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
          "90%": {
            transform: "translateY(-3%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
          // "100%": { transform: "translateY(0)", opacity: "0" }
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
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
          ...{
            primary: "#8f86bb",
            "primary-content": "#f5f5f5",
            secondary: "#ffa401",
            "secondary-content": "#ffffff",
            accent: "#f9a64d",
            "accent-content": "#ffffff",
            neutral: "#3a3a52",
            "neutral-content": "#e0e0e8",
            "base-100": "#ffffff",
            "base-200": "#e8e8e8",
            "base-300": "#d3d3d3",
            "base-content": "#333333",
            info: "#00b6ff",
            "info-content": "#ffffff",
            success: "#00aa6c",
            "success-content": "#ffffff",
            warning: "#fdc100",
            "warning-content": "#333333",
            error: "#ff5c61",
            "error-content": "#ffffff"
          }
        }
      }
    ]
    //bumblebee, nord
  }
};

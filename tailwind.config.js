/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow: "'0px 15px 25px 0px #00000026'",
        shadowTwo: "0px 15px 30px 0px #00000012",

      },
      clipPath: {
        "custom-polygon": "polygon(0 4%, 100% 0, 100% 94%, 0% 100%)",
      },
      clipPathTwo: {
        "custom-polygon": "polygon(0 12%, 100% 0, 100% 96%, 0% 100%)",
      },
      clipPathThree: {
        "custom-polygon": "polygon(0 21%, 100% 0, 100% 79%, 0% 100%)",
      },
      clipPathFooter: {
        "custom-polygon": "polygon(0 21%, 100% 0, 100% 100%, 0% 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-path-custom": {
          clipPath: "polygon(0 4%, 100% 0, 100% 94%, 0% 100%)",
        },
        ".clip-path": {
          clipPath: "polygon(0 12%, 100% 0, 100% 96%, 0% 100%)",
        },
        ".clip-path-journey": {
          clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
        },
        ".clip-path-footer": {
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0% 100%)",
        },
      });
    },
  ],
};

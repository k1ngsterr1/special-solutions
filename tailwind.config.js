/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "hsla(0, 0%, 95%, 1);",
        "custom-black": "hsla(0, 0%, 20%, 1)",
        "custom-orange": "hsla(24, 100%, 50%, 1)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cusimg: "url('assets/saver/girl.png')",
      },
      backgroundColor: {
        custom: "#0C1825",
        custom3: "#F9F9F9",
        custom4: "#F7F0FF",
        custom5: "#0D60D8",
        custom6: "#464F59",
      },
      colors: {
        custom: "#122231",
        custom2: "#3d4f60",
        custom3: "#7913E5",
        custom4: "#464F59",
        custom5:"#B3B0B0",
        custom5:"#B3B0B0",
        custom6:"#DADADA"
      },
      borderColor: {
        custom: "#0C1825",
      },
    },
  },
  plugins: [],
};

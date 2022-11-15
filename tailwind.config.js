/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#3f3f46",
          1: "#d4d4d8",
        },
      },
      backgroundImage: {
        Dubai:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8MnI9AgIOrjmy2Sn7y2_Ebiaji_vfwRc_Q&usqp=CAU')",
      },
    },
  },
  plugins: [],
};

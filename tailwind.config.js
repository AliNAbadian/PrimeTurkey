/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '200': '40rem',
        '256': '64rem',
        '512': '128rem',
        '1024': '256rem',
      }
    },
  },
  plugins: [],
};

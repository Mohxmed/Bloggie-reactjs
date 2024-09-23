/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, // Center the container by default
      padding: {
        DEFAULT: "1rem", // Default padding for all screen sizes
        sm: "2rem", // Padding at the small breakpoint
        lg: "4rem", // Padding at the large breakpoint
        xl: "5rem", // Padding at the extra-large breakpoint
        "2xl": "6rem", // Padding at the 2xl breakpoint
      },
      screens: {
        sm: "100%", // Full-width on small screens
        md: "100%", // Full-width on medium screens
        lg: "1024px", // Max-width on large screens
        xl: "1280px", // Max-width on extra-large screens
        "2xl": "1536px", // Max-width on 2xl screens
      },
    },
    extend: {},
  },
  plugins: [],
};

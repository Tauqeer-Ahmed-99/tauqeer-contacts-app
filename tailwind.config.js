module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
        colors: {
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            accent: "var(--color-accent)"
        }
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  modules: true,
  plugins: {
    autoprefixer: true,
    "postcss-modules": {
      generateScopedName: "[local]",
    },
  },
};

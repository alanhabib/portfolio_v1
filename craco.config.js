const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@fonts": path.resolve(__dirname, "src/fonts/"),
    },
  },
};

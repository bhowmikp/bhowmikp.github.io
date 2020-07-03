const withPWA = require("next-pwa");

module.exports = withPWA({
  distDir: "../.next",
  pwa: {
    dest: "../public"
  }
});

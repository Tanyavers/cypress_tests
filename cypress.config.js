const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 660,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});

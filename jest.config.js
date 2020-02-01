const path = require("path");

module.exports = {
  setupFilesAfterEnv: [path.join(__dirname, "src", "configs", "testSetup.js")]
};

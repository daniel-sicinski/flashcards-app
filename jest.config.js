const path = require("path");

module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: [path.join(__dirname, "src", "configs", "testSetup.js")]
};

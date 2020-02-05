module.exports = api => {
  const isTestEnv = api.env("test");
  const presets = [["@babel/preset-react"]];

  if (isTestEnv) {
    presets.push([
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]);
  }

  return {
    plugins: ["@babel/plugin-proposal-class-properties"],
    presets
  };
};

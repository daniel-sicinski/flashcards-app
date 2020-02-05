module.exports = api => {
  const isTestEnv = api.env("test");
  let targets;

  if (isTestEnv) {
    targets = {
      node: "current"
    };
  } else {
    targets = "> 0.25%, not dead";
  }

  return {
    plugins: ["@babel/plugin-proposal-class-properties"],
    presets: [
      [
        "@babel/preset-env",
        {
          targets
        }
      ],
      ["@babel/preset-react"]
    ]
  };
};

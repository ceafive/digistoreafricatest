module.exports = function (api) {
  api.cache(true);

  const presets = ["next/babel"];
  // const plugins = [];
  const plugins = [["styled-components"]];

  return {
    presets,
    plugins,
  };
};

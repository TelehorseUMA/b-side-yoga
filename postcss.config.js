module.exports = {
  plugins: [
    require("cssnano")({ preset: "default" }),
    require("postcss-custom-properties")({ preserve: false }),
  ],
};

const withPlugins = require("next-compose-plugins");

const isLocalLikeBuildEnv =
  !process.env.BUILD_ENV || process.env.BUILD_ENV === "local";
const isProductionLikeRuntime = process.env.NODE_ENV === "production";

// const configPath = path.resolve(
//   "src/config/env",
//   `${process.env.BUILD_ENV}.json`
// );

const config = withPlugins([], {
  // Enable <React.StrictMode> in application
  reactStrictMode: true,

  fileExtensions: ["jpg", "jpeg", "png", "gif"],

  // https://nextjs.org/docs/advanced-features/compiler
  compiler: {
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: isLocalLikeBuildEnv,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: isLocalLikeBuildEnv,
      // Empty by default.
      // topLevelImportPaths: [],
      // Defaults to ["index"].
      // meaninglessFileNames: [],
      // Enabled by default.
      // cssProp: false,
      // Empty by default.
      // namespace: false,
      // Not supported yet.
      // minify: isLocalLikeBuildEnv,
      // Not supported yet.
      // transpileTemplateLiterals: isLocalLikeBuildEnv,
      // Not supported yet.
      // pure: isLocalLikeBuildEnv,
    },
  },

  webpack(config) {
    // config.resolve.alias["config/env"] = configPath;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    // config.env = {
    //   gaTrackingId: ""
    // }

    return config;
  },
});

module.exports = config;
